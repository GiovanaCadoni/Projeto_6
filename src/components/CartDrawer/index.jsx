import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartIsOpen,
  selectCartItems,
  selectCartTotal,
  closeCart,
  removeItem
} from '../../store/cartSlice'
import * as S from './styles'

import lixo from '../../assets/images/lixo.png' 

export default function CartDrawer() {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectCartIsOpen)
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  if (!isOpen) return null

  return (
    <S.Overlay onClick={() => dispatch(closeCart())}>
      <S.Drawer onClick={(e) => e.stopPropagation()}>
        <S.List>
          {items.map((item) => (
            <S.Item key={item.id}>
              <S.Thumb src={item.foto} alt={item.nome} />

              <S.Info>
                <S.Name>{item.nome}</S.Name>
                <S.Price>
                  {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </S.Price>
              </S.Info>

              <S.Trash
                type="button"
                onClick={() => dispatch(removeItem(item.id))}
                aria-label="Remover item"
              >
                {lixo ? <img src={lixo} alt="" /> : 'Remover'}
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

        <S.Continue type="button">Continuar com a entrega</S.Continue>
      </S.Drawer>
    </S.Overlay>
  )
}