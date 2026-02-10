import HeaderPerfil from '../../components/HeaderPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import * as S from './styles'

import pizza from '../../assets/images/pizza.png'

export default function Perfil() {
const produtos = [
    {
    id: 1,
    imagem: pizza,
    titulo: 'Pizza Marguerita',
    descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
    id: 2,
    imagem: pizza,
    titulo: 'Pizza Marguerita',
    descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
    id: 3,
    imagem: pizza,
    titulo: 'Pizza Marguerita',
    descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
    id: 3,
    imagem: pizza,
    titulo: 'Pizza Marguerita',
    descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
    id: 3,
    imagem: pizza,
    titulo: 'Pizza Marguerita',
    descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
    id: 3,
    imagem: pizza,
    titulo: 'Pizza Marguerita',
    descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }
]
return (
    <>
        <HeaderPerfil />
        <BannerPerfil
        categoria="Italiana"
        nome="La Dolce Vita Trattoria"
        imagem={pizza}
    />
        <S.Main>
        <S.Container>
            <S.Grid>
            {produtos.map((p) => (
                <ProductCard key={p.id} {...p} />
            ))}
            </S.Grid>
        </S.Container>
        </S.Main>
        <Footer />
    </>
)
}
