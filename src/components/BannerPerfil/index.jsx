import * as S from './styles'

export default function BannerPerfil({ categoria, nome, imagem }) {
return (
    <S.Wrapper $bg={imagem}>
        <S.Overlay />
        <S.Inner>
        <S.Category>{categoria}</S.Category>
        <S.Name>{nome}</S.Name>
        </S.Inner>
    </S.Wrapper>
)
}
