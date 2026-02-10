import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/logo.png'

export default function HeaderPerfil() {
return (
    <S.Wrapper>
        <S.Inner>
        <S.Left>
            <Link to="/">Restaurantes</Link>
        </S.Left>
        <S.Center>
            <img src={logo} alt="efood" />
        </S.Center>
        <S.Right>0 produto(s) no carrinho</S.Right>
        </S.Inner>
    </S.Wrapper>
)
}
