import * as S from './styles'
import logo from '../../assets/images/logo.png'

export default function HeroHome() {
  return (
    <S.Wrapper>
      <S.Logo src={logo} alt="efood" />

      <S.Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </S.Title>
    </S.Wrapper>
  )
}
