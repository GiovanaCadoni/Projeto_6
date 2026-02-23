import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  selectCartItems,
  selectCartTotal,
  removeItem,
  addItem,
  decrementItem,
  clearCart
} from '../../store/cartSlice'
import * as S from './styles'

export default function Carrinho() {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  return (
    <S.Page>
      <S.Header>
        <S.Container>
          <Link to="/">← Voltar</Link>
          <h1>Carrinho</h1>
          <button type="button" onClick={() => dispatch(clearCart())}>
            Limpar
          </button>
        </S.Container>
      </S.Header>

      <S.Container>
        {items.length === 0 ? (
          <S.Empty>Seu carrinho está vazio.</S.Empty>
        ) : (
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

                    <S.QtyRow>
                      <button type="button" onClick={() => dispatch(decrementItem(item.id))}>
                        -
                      </button>
                      <span>{item.quantidade}</span>
                      <button type="button" onClick={() => dispatch(addItem(item))}>
                        +
                      </button>
                    </S.QtyRow>
                  </S.Info>

                  <S.Remove type="button" onClick={() => dispatch(removeItem(item.id))}>
                    Remover
                  </S.Remove>
                </S.Item>
              ))}
            </S.List>

            <S.TotalRow>
              <span>Valor total</span>
              <strong>
                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </strong>
            </S.TotalRow>
          </>
        )}
      </S.Container>
    </S.Page>
  )
}