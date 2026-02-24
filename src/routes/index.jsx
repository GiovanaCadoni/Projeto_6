import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Entrega from '../pages/Entrega'
import Confirmacao from '../pages/Confirmacao'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/entrega" element={<Entrega />} />
            <Route path="/confirmacao" element={<Confirmacao />} />
        </Routes>
    )
}