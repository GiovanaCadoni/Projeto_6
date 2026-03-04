export const onlyDigits = (v = '') => String(v).replace(/\D/g, '')

export const isExactDigits = (v, n) => onlyDigits(v).length === n

export const isValidCEP = (v = '') => isExactDigits(v, 8)

export const isValidMonth = (v = '') => {
  const d = onlyDigits(v)
  if (d.length !== 2) return false
  const m = Number(d)
  return Number.isInteger(m) && m >= 1 && m <= 12
}

// Aceita ano com 2 ou 4 dígitos, e exige que esteja no futuro (ou atual)
export const isValidFutureYear = (v = '') => {
  const d = onlyDigits(v)
  if (!(d.length === 2 || d.length === 4)) return false

  const now = new Date()
  const currentYear = now.getFullYear()

  const year = d.length === 2 ? 2000 + Number(d) : Number(d)
  if (!Number.isFinite(year)) return false

  return year >= currentYear && year <= currentYear + 30
}

// Se o cartão está no futuro considerando mês/ano
export const isNotExpired = (monthStr = '', yearStr = '') => {
  if (!isValidMonth(monthStr) || !isValidFutureYear(yearStr)) return false

  const m = Number(onlyDigits(monthStr))
  const yDigits = onlyDigits(yearStr)
  const y = yDigits.length === 2 ? 2000 + Number(yDigits) : Number(yDigits)

  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1

  if (y > currentYear) return true
  return m >= currentMonth
}

export const isValidCVV = (v = '') => {
  const d = onlyDigits(v)
  return d.length === 3 || d.length === 4
}

// Luhn
export const isValidCardNumber = (v = '') => {
  const d = onlyDigits(v)
  if (d.length < 13 || d.length > 19) return false

  let sum = 0
  let dbl = false

  for (let i = d.length - 1; i >= 0; i--) {
    let n = Number(d[i])
    if (dbl) {
      n *= 2
      if (n > 9) n -= 9
    }
    sum += n
    dbl = !dbl
  }

  return sum % 10 === 0
}