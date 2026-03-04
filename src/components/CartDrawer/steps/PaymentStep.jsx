import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectCartItems,
  selectCartTotal,
  selectDelivery,
  setPayment,
  setStep
} from '../../../store/cartSlice'

import { placeOrder } from '../../../store/orderSlice'
import * as S from '../styles'

import {
  onlyDigits,
  isValidCardNumber,
  isValidCVV,
  isValidMonth,
  isValidFutureYear,
  isNotExpired
} from '../../../utils/validators'

export default function PaymentStep() {
  const dispatch = useDispatch()

  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)
  const delivery = useSelector(selectDelivery)

  const [form, setForm] = useState({
    cardName: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: ''
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleNumeric = (name, value, maxLen) => {
    const clean = onlyDigits(value)

    setErrors((prev) => ({
      ...prev,
      [name]: value !== clean ? 'Digite apenas números.' : ''
    }))

    setForm((prev) => ({
      ...prev,
      [name]: clean.slice(0, maxLen)
    }))
  }

  const onChange = (e) => {
    const { name, value } = e.target

    if (name === 'cardNumber') return handleNumeric('cardNumber', value, 19)
    if (name === 'cardCode') return handleNumeric('cardCode', value, 4)
    if (name === 'expiresMonth') return handleNumeric('expiresMonth', value, 2)
    if (name === 'expiresYear') return handleNumeric('expiresYear', value, 4)

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const e = {}

    if (!form.cardName.trim()) e.cardName = 'Informe o nome no cartão.'
    if (!isValidCardNumber(form.cardNumber)) e.cardNumber = 'Número do cartão inválido.'
    if (!isValidCVV(form.cardCode)) e.cardCode = 'CVV inválido.'
    if (!isValidMonth(form.expiresMonth)) e.expiresMonth = 'Mês inválido (01 a 12).'
    if (!isValidFutureYear(form.expiresYear)) e.expiresYear = 'Ano inválido ou não está no futuro.'
    if (isValidMonth(form.expiresMonth) && isValidFutureYear(form.expiresYear) && !isNotExpired(form.expiresMonth, form.expiresYear)) {
      e.expiresMonth = 'Cartão expirado.'
      e.expiresYear = 'Cartão expirado.'
    }

    return e
  }

  const onFinish = async (e) => {
    e.preventDefault()

    if (!delivery) {
      dispatch(setStep('delivery'))
      return
    }

    const v = validate()
    setErrors((prev) => ({ ...prev, ...v }))
    if (Object.keys(v).length > 0) return

    dispatch(setPayment(form))

    const month = Number(onlyDigits(form.expiresMonth))
    const yDigits = onlyDigits(form.expiresYear)
    const year = yDigits.length === 2 ? 2000 + Number(yDigits) : Number(yDigits)

    const payload = {
      products: items.map((p) => ({
        id: p.id,
        price: Number(p.preco) * Number(p.quantidade || 1)
      })),
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.address,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: parseInt(delivery.number, 10),
          complement: delivery.complement || ''
        }
      },
      payment: {
        card: {
          name: form.cardName,
          number: onlyDigits(form.cardNumber),
          code: parseInt(form.cardCode, 10),
          expires: { month, year }
        }
      }
    }

    try {
      setLoading(true)
      await dispatch(placeOrder(payload)).unwrap()
      dispatch(setStep('confirmation'))
    } catch (error) {
      console.error('Erro ao finalizar pagamento:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.StepWrap>
      <S.StepTitle>Pagamento</S.StepTitle>

      <S.StepText>
        Total a pagar:{' '}
        <strong>
          {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </strong>
      </S.StepText>

      <S.StepForm onSubmit={onFinish}>
        <S.StepField>
          <label>Nome no cartão</label>
          <input
            name="cardName"
            value={form.cardName}
            onChange={onChange}
            className={errors.cardName ? 'error' : ''}
            required
          />
          {errors.cardName && <S.FieldError>{errors.cardName}</S.FieldError>}
        </S.StepField>

        <S.StepRowCard>
          <S.StepField>
            <label>Número do cartão</label>
            <input
              name="cardNumber"
              value={form.cardNumber}
              onChange={onChange}
              className={errors.cardNumber ? 'error' : ''}
              required
            />
            {errors.cardNumber && <S.FieldError>{errors.cardNumber}</S.FieldError>}
          </S.StepField>

          <S.StepField>
            <label>CVV</label>
            <input
              name="cardCode"
              value={form.cardCode}
              onChange={onChange}
              className={errors.cardCode ? 'error' : ''}
              required
            />
            {errors.cardCode && <S.FieldError>{errors.cardCode}</S.FieldError>}
          </S.StepField>
        </S.StepRowCard>

        <S.StepRow>
          <S.StepField>
            <label>Mês</label>
            <input
              name="expiresMonth"
              value={form.expiresMonth}
              onChange={onChange}
              className={errors.expiresMonth ? 'error' : ''}
              required
            />
            {errors.expiresMonth && <S.FieldError>{errors.expiresMonth}</S.FieldError>}
          </S.StepField>

          <S.StepField>
            <label>Ano</label>
            <input
              name="expiresYear"
              value={form.expiresYear}
              onChange={onChange}
              className={errors.expiresYear ? 'error' : ''}
              required
            />
            {errors.expiresYear && <S.FieldError>{errors.expiresYear}</S.FieldError>}
          </S.StepField>
        </S.StepRow>

        <S.StepBtnPrimary type="submit" disabled={loading}>
          {loading ? 'Finalizando...' : 'Finalizar pagamento'}
        </S.StepBtnPrimary>

        <S.StepBtnSecondary type="button" onClick={() => dispatch(setStep('delivery'))}>
          Voltar para a entrega
        </S.StepBtnSecondary>
      </S.StepForm>
    </S.StepWrap>
  )
}