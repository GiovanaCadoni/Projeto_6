import { useDispatch, useSelector } from 'react-redux'
import {
    selectCartIsOpen,
    selectCartStep,
    closeCart
} from '../../store/cartSlice'

import CartStep from './steps/CartStep'
import DeliveryStep from './steps/DeliveryStep'
import PaymentStep from './steps/PaymentStep'
import ConfirmationStep from './steps/ConfirmationStep'

import * as S from './styles'

export default function CartDrawer() {
    const dispatch = useDispatch()
    const isOpen = useSelector(selectCartIsOpen)
    const step = useSelector(selectCartStep)

    if (!isOpen) return null

    return (
        <S.Overlay onClick={() => dispatch(closeCart())}>
            <S.Drawer onClick={(e) => e.stopPropagation()}>
                {step === 'cart' && <CartStep />}
                {step === 'delivery' && <DeliveryStep />}
                {step === 'payment' && <PaymentStep />}
                {step === 'confirmation' && <ConfirmationStep />}
            </S.Drawer>
        </S.Overlay>
    )
}