import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

export default function Entrega() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        receiver: '',
        address: '',
        city: '',
        zipCode: '',
        number: '',
        complement: ''
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        navigate('/pagamento')
    }

    return (
        <S.Overlay>
            <S.Drawer>
                <S.Title>Entrega</S.Title>

                <S.Form onSubmit={onSubmit}>
                    <S.Field>
                        <label>Quem irá receber</label>
                        <input
                            name="receiver"
                            value={form.receiver}
                            onChange={onChange}
                            required
                        />
                    </S.Field>

                    <S.Field>
                        <label>Endereço</label>
                        <input
                            name="address"
                            value={form.address}
                            onChange={onChange}
                            required
                        />
                    </S.Field>

                    <S.Field>
                        <label>Cidade</label>
                        <input
                            name="city"
                            value={form.city}
                            onChange={onChange}
                            required
                        />
                    </S.Field>

                    <S.Row>
                        <S.Field>
                            <label>CEP</label>
                            <input
                                name="zipCode"
                                value={form.zipCode}
                                onChange={onChange}
                                required
                            />
                        </S.Field>

                        <S.Field>
                            <label>Número</label>
                            <input
                                name="number"
                                value={form.number}
                                onChange={onChange}
                                required
                            />
                        </S.Field>
                    </S.Row>

                    <S.Field>
                        <label>Complemento (opcional)</label>
                        <input
                            name="complement"
                            value={form.complement}
                            onChange={onChange}
                        />
                    </S.Field>

                    <S.ButtonPrimary type="submit">
                        Continuar com o pagamento
                    </S.ButtonPrimary>

                    <S.ButtonSecondary
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        Voltar para o carrinho
                    </S.ButtonSecondary>
                </S.Form>
            </S.Drawer>
        </S.Overlay>
    )
}