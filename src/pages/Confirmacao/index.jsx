import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { selectOrder } from '../../store/orderSlice'
import * as S from './styles'

export default function Confirmacao() {
    const order = useSelector(selectOrder)
    if (!order) return <Navigate to="/" replace />

    const orderId = order.orderId ?? order.id

    return (
        <S.Page>
            <S.Container>
                <S.Title>Pedido realizado</S.Title>

                <S.Text>
                    Seu pedido foi concluído com sucesso!
                </S.Text>

                <S.Box>
                    <strong>Número do pedido:</strong>
                    <span>{orderId}</span>
                </S.Box>

                <S.Text>
                    Guarde este número, em caso de dúvidas.
                </S.Text>

                <S.Back>
                    <Link to="/">Voltar para a Home</Link>
                </S.Back>
            </S.Container>
        </S.Page>
    )
}