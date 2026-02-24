import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goToCart, setDelivery, setStep, selectDelivery } from '../../../store/cartSlice'
import * as S from '../styles'

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

    const onChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const onNext = (e) => {
        e.preventDefault()
        dispatch(setDelivery(form))
        dispatch(setStep('payment'))
    }

    return (
        <S.StepWrap>
            <S.StepTitle>Entrega</S.StepTitle>

            <S.StepForm onSubmit={onNext}>
                <S.StepField>
                    <label>Quem irá receber</label>
                    <input name="receiver" value={form.receiver} onChange={onChange} required />
                </S.StepField>

                <S.StepField>
                    <label>Endereço</label>
                    <input name="address" value={form.address} onChange={onChange} required />
                </S.StepField>

                <S.StepField>
                    <label>Cidade</label>
                    <input name="city" value={form.city} onChange={onChange} required />
                </S.StepField>

                <S.StepRow>
                    <S.StepField>
                        <label>CEP</label>
                        <input name="zipCode" value={form.zipCode} onChange={onChange} required />
                    </S.StepField>

                    <S.StepField>
                        <label>Número</label>
                        <input name="number" value={form.number} onChange={onChange} required />
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