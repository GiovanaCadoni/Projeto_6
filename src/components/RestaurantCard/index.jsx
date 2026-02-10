import * as S from './styles'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

export default function RestaurantCard({
id,
imagem,
titulo,
nota,
descricao,
tags = []
}) {
return (
    <S.Card>
    <S.ImageWrapper>
        <S.Image src={imagem} alt={titulo} />
        <S.Tags>
        {tags.map((tag) => (
            <S.Tag key={tag}>{tag}</S.Tag>
        ))}
        </S.Tags>
    </S.ImageWrapper>
    <S.Content>
        <S.HeaderRow>
        <S.Title>{titulo}</S.Title>
        <S.Rating>
            <span>{nota}</span>
            <img src={estrela} alt="Estrela" />
        </S.Rating>
        </S.HeaderRow>
        <S.Description>{descricao}</S.Description>
        <Link to={`/perfil/${id}`}>
            <S.Button>Saiba mais</S.Button>
        </Link>
    </S.Content>
    </S.Card>
)
}
