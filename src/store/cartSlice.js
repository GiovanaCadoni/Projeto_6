import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        isOpen: false,
        step: 'cart', // 'cart' | 'delivery' | 'payment' | 'confirmation'
        delivery: null,
        payment: null
    },
    reducers: {
        openCart: (state) => {
            state.isOpen = true
        },
        closeCart: (state) => {
            state.isOpen = false
            state.step = 'cart'
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
            if (!state.isOpen) state.step = 'cart'
        },

        setStep: (state, action) => {
            state.step = action.payload
        },
        goToCart: (state) => {
            state.isOpen = true
            state.step = 'cart'
        },
        goToDelivery: (state) => {
            state.isOpen = true
            state.step = 'delivery'
        },
        goToPayment: (state) => {
            state.isOpen = true
            state.step = 'payment'
        },
        goToConfirmation: (state) => {
            state.isOpen = true
            state.step = 'confirmation'
        },
        setDelivery: (state, action) => {
            state.delivery = action.payload
        },
        setPayment: (state, action) => {
            state.payment = action.payload
        },
        clearCheckout: (state) => {
            state.delivery = null
            state.payment = null
            state.step = 'cart'
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
    openCart,
    closeCart,
    toggleCart,
    setStep,
    goToCart,
    goToDelivery,
    goToPayment,
    goToConfirmation,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
    setDelivery,
    setPayment,
    clearCheckout
} = cartSlice.actions

export default cartSlice.reducer

export const selectCartItems = (state) => state.cart.items
export const selectCartIsOpen = (state) => state.cart.isOpen
export const selectCartStep = (state) => state.cart.step
export const selectDelivery = (state) => state.cart.delivery
export const selectPayment = (state) => state.cart.payment

export const selectCartCount = (state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantidade, 0)

export const selectCartTotal = (state) =>
    state.cart.items.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

