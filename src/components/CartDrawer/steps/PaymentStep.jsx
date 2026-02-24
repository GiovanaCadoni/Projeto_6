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

    const [loading, setLoading] = useState(false)

    const onChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const onFinish = async (e) => {
        e.preventDefault()

        if (!delivery) {
            dispatch(setStep('delivery'))
            return
        }

        const cardCode = parseInt(form.cardCode, 10)
        const month = parseInt(form.expiresMonth, 10)
        const year = parseInt(form.expiresYear, 10)
        const houseNumber = parseInt(delivery.number, 10)

        const cardNumberClean = (form.cardNumber || '').replace(/\s/g, '')

        if (!form.cardName.trim()) return
        if (!cardNumberClean.trim()) return

        if (
            !Number.isFinite(cardCode) ||
            !Number.isFinite(month) ||
            !Number.isFinite(year) ||
            !Number.isFinite(houseNumber)
        ) {
            console.error('Campos numéricos inválidos', {
                cardCode,
                month,
                year,
                houseNumber
            })
            return
        }

        if (month < 1 || month > 12) {
            console.error('Mês inválido:', month)
            return
        }

        dispatch(setPayment(form))

        const payload = {
            products: items.map((p) => ({
                id: p.id,
                price: p.preco
            })),
            delivery: {
                receiver: delivery.receiver,
                address: {
                    description: delivery.address,
                    city: delivery.city,
                    zipCode: delivery.zipCode,
                    number: houseNumber,
                    complement: delivery.complement || ''
                }
            },
            payment: {
                card: {
                    name: form.cardName,
                    number: cardNumberClean,
                    code: cardCode,
                    expires: {
                        month,
                        year
                    }
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
                {/* Nome no cartão — 344x32 */}
                <S.StepField>
                    <label>Nome no cartão</label>
                    <input
                        name="cardName"
                        value={form.cardName}
                        onChange={onChange}
                        required
                    />
                </S.StepField>

                {/* Número do cartão (228x32) + CVV (87x32) */}
                <S.StepRowCard>
                    <S.StepField>
                        <label>Número do cartão</label>
                        <input
                            name="cardNumber"
                            value={form.cardNumber}
                            onChange={onChange}
                            required
                        />
                    </S.StepField>

                    <S.StepField>
                        <label>CVV</label>
                        <input
                            name="cardCode"
                            value={form.cardCode}
                            onChange={onChange}
                            required
                        />
                    </S.StepField>
                </S.StepRowCard>

                {/* Mês (155x32) + Ano (155x32) */}
                <S.StepRow>
                    <S.StepField>
                        <label>Mês</label>
                        <input
                            name="expiresMonth"
                            value={form.expiresMonth}
                            onChange={onChange}
                            required
                        />
                    </S.StepField>

                    <S.StepField>
                        <label>Ano</label>
                        <input
                            name="expiresYear"
                            value={form.expiresYear}
                            onChange={onChange}
                            required
                        />
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