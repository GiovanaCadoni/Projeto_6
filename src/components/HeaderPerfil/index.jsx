import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openCart, selectCartCount } from '../../store/cartSlice'
import * as S from './styles'
import logo from '../../assets/images/logo.png'

export default function HeaderPerfil() {
const dispatch = useDispatch()
const count = useSelector(selectCartCount)

return (
    <S.Wrapper>
    <S.Inner>
        <S.Left>
        <Link to="/">Restaurantes</Link>
        </S.Left>
        <S.Center>
        <img src={logo} alt="efood" />
        </S.Center>
        <S.Right>
        <button type="button" onClick={() => dispatch(openCart())}>
            {count} produto(s) no carrinho
        </button>
        </S.Right>
    </S.Inner>
    </S.Wrapper>
)
}