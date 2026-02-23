import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Carrinho from '../pages/Carrinho'

export default function AppRoutes() {
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
    </BrowserRouter>
)
}