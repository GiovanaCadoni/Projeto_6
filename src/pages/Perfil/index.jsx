import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import ModalProduto from '../../components/ModalProduto'
import * as S from './styles'
import getRestaurantes  from '../../services/api'

export default function Perfil() {
const { id } = useParams()
const [restaurante, setRestaurante] = useState(null)
const [produtoSelecionado, setProdutoSelecionado] = useState(null)

useEffect(() => {
    async function load() {
    const data = await getRestaurantes()
    const found = data.find((r) => String(r.id) === String(id))
    setRestaurante(found)
    }
    load()
}, [id])

if (!restaurante) return <p>Carregando...</p>

return (
    <>
    <HeaderPerfil />
    <BannerPerfil
        categoria={restaurante.tipo}
        nome={restaurante.titulo}
        imagem={restaurante.capa}
    />
    <S.Main>
        <S.Container>
        <S.Grid>
            {restaurante.cardapio.map((p) => (
            <ProductCard
                key={p.id}
                produto={p}
                onOpenModal={setProdutoSelecionado}
            />
            ))}
        </S.Grid>
        </S.Container>
    </S.Main>
    <ModalProduto
        produto={produtoSelecionado}
        onClose={() => setProdutoSelecionado(null)}
    />
    <Footer />
    </>
)
}
