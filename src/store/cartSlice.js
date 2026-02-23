import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    items: [],
    isOpen: false
},
reducers: {
    openCart: (state) => {
        state.isOpen = true
    },
    closeCart: (state) => {
        state.isOpen = false
    },
    toggleCart: (state) => {
        state.isOpen = !state.isOpen
    },

    addItem: (state, action) => {
    const produto = action.payload
    const found = state.items.find((i) => i.id === produto.id)

    if (found) {
        found.quantidade += 1
    } else {
        state.items.push({ ...produto, quantidade: 1 })
    }
    },

    decrementItem: (state, action) => {
    const id = action.payload
    const found = state.items.find((i) => i.id === id)
    if (!found) return

    found.quantidade -= 1

    if (found.quantidade <= 0) {
        state.items = state.items.filter((i) => i.id !== id)
    }
    },

    removeItem: (state, action) => {
    const id = action.payload
    state.items = state.items.filter((i) => i.id !== id)
    },

    clearCart: (state) => {
    state.items = []
    }
}
})

export const {
addItem,
decrementItem,
removeItem,
clearCart,
openCart,
closeCart,
toggleCart
} = cartSlice.actions

export default cartSlice.reducer

export const selectCartItems = (state) => state.cart.items
export const selectCartIsOpen = (state) => state.cart.isOpen

export const selectCartCount = (state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantidade, 0)

export const selectCartTotal = (state) =>
    state.cart.items.reduce((acc, item) => acc + item.preco * item.quantidade, 0)