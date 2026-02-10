import HeaderPerfil from '../../components/HeaderPerfil'
import BannerPerfil from '../../components/BannerPerfil'
import Footer from '../../components/Footer'
import macarrao from '../../assets/images/macarrao.png'

export default function Perfil() {
return (
    <>
        <HeaderPerfil />
        <BannerPerfil
        categoria="Italiana"
        nome="La Dolce Vita Trattoria"
        imagem={macarrao}
        />
      {/* Grid de produtos entra aqui já já */}
        <Footer />
    </>
)
}
