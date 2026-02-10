import * as S from './styles'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

export default function Footer() {
return (
    <S.Wrapper>
    <S.Logo src={logo} alt="efood" />
    <S.Social>
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" />
    </S.Social>
    <S.Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
        qualidade dos produtos é toda do estabelecimento contratado.
    </S.Text>
    </S.Wrapper>
)
}
