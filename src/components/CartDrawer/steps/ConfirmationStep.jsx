import { useDispatch, useSelector } from 'react-redux'
import { clearCart, setStep } from '../../../store/cartSlice'
import { selectOrder } from '../../../store/orderSlice'
import * as S from '../styles'

export default function ConfirmationStep() {
    const dispatch = useDispatch()
    const order = useSelector(selectOrder)

    const handleClose = () => {
        dispatch(clearCart())
        dispatch(setStep('cart'))
    }

    return (
        <S.StepWrap>
            <S.StepTitle>
                Pedido realizado - {order?.orderId}
            </S.StepTitle>

            <S.StepText>
                Estamos felizes em informar que seu pedido já está em processo de
                preparação e, em breve, será entregue no endereço fornecido.
            </S.StepText>

            <S.StepText>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
            </S.StepText>

            <S.StepText>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
            </S.StepText>

            <S.StepText>
                Esperamos que desfrute de uma deliciosa e agradável
                experiência gastronômica. Bom apetite!
            </S.StepText>

            <S.StepBtnPrimary type="button" onClick={handleClose}>
                Concluir
            </S.StepBtnPrimary>
        </S.StepWrap>
    )
}