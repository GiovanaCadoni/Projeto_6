import { useEffect } from 'react'
import * as S from './styles'
import closeIcon from '../../assets/images/close.png'

export default function ModalProduto({ produto, onClose }) {
useEffect(() => {
    if (!produto) {
    document.body.style.overflow = 'auto'
    return
    }

    document.body.style.overflow = 'hidden'

    function onKeyDown(e) {
    if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
    document.body.style.overflow = 'auto'
    window.removeEventListener('keydown', onKeyDown)
    }
}, [produto, onClose])

if (!produto) return null

return (
    <S.Overlay onClick={onClose}>
    <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Close type="button" onClick={onClose}>
            <img src={closeIcon} alt="Fechar" />
        </S.Close>
        <S.Image src={produto.foto} alt={produto.nome} />
        <S.Content>
        <S.Title>{produto.nome}</S.Title>
        <S.Description>{produto.descricao}</S.Description>
        <S.Portion>Serve: {produto.porcao}</S.Portion>
        <S.Button type="button">
            Adicionar ao carrinho -{' '}
            {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </S.Button>
        </S.Content>
    </S.Container>
    </S.Overlay>
)
}
