import HeroHome from '../../components/HeroHome'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import * as S from './styles'

import suchi from '../../assets/images/suchi.png'
import macarrao from '../../assets/images/macarrao.png'

export default function Home() {
const restaurantes = [
    {
    id: 1,
    imagem: suchi,
    titulo: 'Hioki Sushi',
    nota: '4.9',
    descricao:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    tags: ['Destaque da semana', 'Japonesa']
    },
    {
    id: 2,
    imagem: macarrao,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana']
    },
    {
    id: 2,
    imagem: macarrao,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana']
    },
    {
    id: 2,
    imagem: macarrao,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana']
    },
    {
    id: 2,
    imagem: macarrao,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana']
    },
    {
    id: 2,
    imagem: macarrao,
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    tags: ['Italiana']
    }
]
return (
    <>
    <HeroHome />
    <S.Main>
        <S.Container>
        <S.Grid>
            {restaurantes.map((r) => (
            <RestaurantCard key={r.id} {...r} />
            ))}
        </S.Grid>
        </S.Container>
    </S.Main>
    <Footer />
    </>
)
}
