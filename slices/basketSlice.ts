import { createSlice } from '@reduxjs/toolkit'

export interface CartProps {
    items: any[]
}

const initialState: CartProps = {
    items: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {

            const index = state.items.flat().findIndex(
                (basketIndex) => basketIndex._id === action.payload
            )
            console.log("index", index)

            let newBasket = [...state.items].flat()
            console.log('newBasket', newBasket)

            if (index >= 0) {
                newBasket.splice(index, 1)
                console.log('newBasket', newBasket)
            }
            else {
                console.log(`Product does not exist`)
            }
            state.items = newBasket
        }
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions
export default basketSlice.reducer

export const selectTotal = (state: any) => parseFloat(state.basket.items.flat().reduce((total: any, item: any) => parseFloat(total) + parseFloat(item.price), 0));

export const selectQuantity = (state: any) => parseFloat(state.basket.items.flat().reduce((total: any, item: any) => parseFloat(total) + parseFloat(item.quantity), 0));