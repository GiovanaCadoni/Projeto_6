import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goToCart, setDelivery, setStep, selectDelivery } from '../../../store/cartSlice'
import * as S from '../styles'
import { onlyDigits, isValidCEP } from '../../../utils/validators'

export default function DeliveryStep() {
  const dispatch = useDispatch()
  const saved = useSelector(selectDelivery)

  const [form, setForm] = useState(
    saved || {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    }
  )

  const [errors, setErrors] = useState({})

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

    if (name === 'zipCode') return handleNumeric('zipCode', value, 8)
    if (name === 'number') return handleNumeric('number', value, 6)

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onNext = (e) => {
    e.preventDefault()

    const next = {}

    if (!form.receiver.trim()) next.receiver = 'Informe quem irá receber.'
    if (!form.address.trim()) next.address = 'Informe o endereço.'
    if (!form.city.trim()) next.city = 'Informe a cidade.'
    if (!isValidCEP(form.zipCode)) next.zipCode = 'CEP inválido (8 dígitos).'
    if (!form.number.trim()) next.number = 'Número obrigatório.'

    setErrors((prev) => ({ ...prev, ...next }))
    if (Object.keys(next).length > 0) return

    dispatch(setDelivery(form))
    dispatch(setStep('payment'))
  }

  return (
    <S.StepWrap>
      <S.StepTitle>Entrega</S.StepTitle>

      <S.StepForm onSubmit={onNext}>
        <S.StepField>
          <label>Quem irá receber</label>
          <input
            name="receiver"
            value={form.receiver}
            onChange={onChange}
            className={errors.receiver ? 'error' : ''}
            required
          />
          {errors.receiver && <S.FieldError>{errors.receiver}</S.FieldError>}
        </S.StepField>

        <S.StepField>
          <label>Endereço</label>
          <input
            name="address"
            value={form.address}
            onChange={onChange}
            className={errors.address ? 'error' : ''}
            required
          />
          {errors.address && <S.FieldError>{errors.address}</S.FieldError>}
        </S.StepField>

        <S.StepField>
          <label>Cidade</label>
          <input
            name="city"
            value={form.city}
            onChange={onChange}
            className={errors.city ? 'error' : ''}
            required
          />
          {errors.city && <S.FieldError>{errors.city}</S.FieldError>}
        </S.StepField>

        <S.StepRow>
          <S.StepField>
            <label>CEP</label>
            <input
              name="zipCode"
              value={form.zipCode}
              onChange={onChange}
              className={errors.zipCode ? 'error' : ''}
              required
            />
            {errors.zipCode && <S.FieldError>{errors.zipCode}</S.FieldError>}
          </S.StepField>

          <S.StepField>
            <label>Número</label>
            <input
              name="number"
              value={form.number}
              onChange={onChange}
              className={errors.number ? 'error' : ''}
              required
            />
            {errors.number && <S.FieldError>{errors.number}</S.FieldError>}
          </S.StepField>
        </S.StepRow>

        <S.StepField>
          <label>Complemento (opcional)</label>
          <input name="complement" value={form.complement} onChange={onChange} />
        </S.StepField>

        <S.StepBtnPrimary type="submit">Continuar com o pagamento</S.StepBtnPrimary>

        <S.StepBtnSecondary type="button" onClick={() => dispatch(goToCart())}>
          Voltar para o carrinho
        </S.StepBtnSecondary>
      </S.StepForm>
    </S.StepWrap>
  )
}