import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
selectCartItems,
selectCartTotal,
removeItem,
goToDelivery
} from '../../../store/cartSlice'
import * as S from '../styles'

import trashIcon from '../../../assets/images/lixo.png'

export default function CartStep() {
const dispatch = useDispatch()
const items = useSelector(selectCartItems)
const total = useSelector(selectCartTotal)

const [warning, setWarning] = useState('')

const handleContinue = () => {
    if (items.length === 0) {
        setWarning('Adicione pelo menos um item ao carrinho para continuar.')
        return
    }

    setWarning('')
    dispatch(goToDelivery())
}

return (
    <>
    <S.List>
        {items.map((item) => (
        <S.Item key={item.id}>
            <S.Thumb src={item.foto} alt={item.nome} />
            <S.Info>
            <S.Name>{item.nome}</S.Name>
            <S.Price>
                {item.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
                })}
            </S.Price>
            </S.Info>
            <S.Trash type="button" onClick={() => dispatch(removeItem(item.id))}>
            <img src={trashIcon} alt="" />
            </S.Trash>
        </S.Item>
        ))}
    </S.List>
    <S.TotalRow>
        <span>Valor total</span>
        <strong>
        {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </strong>
    </S.TotalRow>

    {warning && <S.Warning>{warning}</S.Warning>}

    <S.Continue
        type="button"
        onClick={handleContinue}
        disabled={items.length === 0}
    >
        Continuar com a entrega
    </S.Continue>
    </>
)
}