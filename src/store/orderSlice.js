import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postCheckout } from '../services/checkout'

export const placeOrder = createAsyncThunk(
    'order/placeOrder',
    async (payload) => {
        const data = await postCheckout(payload)
        return data
    }
)

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: null,
        status: 'idle',
        error: null
    },
    reducers: {
        clearOrder: (state) => {
            state.data = null
            state.status = 'idle'
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(placeOrder.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(placeOrder.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(placeOrder.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error?.message || 'Erro ao finalizar'
            })
    }
})

export const { clearOrder } = orderSlice.actions
export default orderSlice.reducer

export const selectOrder = (state) => state.order.data
export const selectOrderStatus = (state) => state.order.status
export const selectOrderError = (state) => state.order.error