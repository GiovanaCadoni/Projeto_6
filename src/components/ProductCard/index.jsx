import * as S from './styles'

export default function ProductCard({ imagem, titulo, descricao }) {
return (
    <S.Card>
    <S.Image src={imagem} />
    <S.Title>{titulo}</S.Title>
    <S.Description>{descricao}</S.Description>
    <S.Button>Adicionar ao carrinho</S.Button>
    </S.Card>
)
}
