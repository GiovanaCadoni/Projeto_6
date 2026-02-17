export default async function getRestaurantes() {
const res = await fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
if (!res.ok) throw new Error('Erro ao buscar restaurantes')
return res.json()
}
