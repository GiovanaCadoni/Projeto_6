import * as S from './styles'

export default function ProductCard({ produto, onOpenModal }) {
return (
    <S.Card>
    <S.Image src={produto.foto} alt={produto.nome} />
    <S.Title>{produto.nome}</S.Title>
    <S.Description>{produto.descricao}</S.Description>
    <S.Button type="button" onClick={() => onOpenModal(produto)}>
        Adicionar ao carrinho
    </S.Button>
    </S.Card>
)
}
