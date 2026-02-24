const CHECKOUT_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

export async function postCheckout(payload) {
    const response = await fetch(CHECKOUT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
        throw new Error(data?.message || JSON.stringify(data) || 'Erro ao finalizar pedido')
    }

    return data
}