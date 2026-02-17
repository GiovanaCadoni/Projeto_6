import { useEffect, useState } from 'react'
import HeroHome from '../../components/HeroHome'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import * as S from './styles'
import  getRestaurantes from '../../services/api.js'

export default function Home() {
const [restaurantes, setRestaurantes] = useState([])

useEffect(() => {
    async function load() {
    try {
        const data = await getRestaurantes()
        setRestaurantes(data)
    } catch (error) {
        console.error(error)
    }
    }
    load()
}, [])

return (
    <>
    <HeroHome />
    <S.Main>
        <S.Container>
        <S.Grid>
            {restaurantes.map((r) => (
            <RestaurantCard
                key={r.id}
                id={r.id}
                imagem={r.capa}
                titulo={r.titulo}
                nota={String(r.avaliacao)}
                descricao={r.descricao}
                tags={[
                ...(r.destacado ? ['Destaque da semana'] : []),
                r.tipo
                ]}
            />
            ))}
        </S.Grid>
        </S.Container>
    </S.Main>
    <Footer />
    </>
)
}
