import {createSlice} from '@reduxjs/toolkit';

export const cardSlice = createSlice(
{
    name:'cards',
    initialState:{
        cards:{}
    },
    reducers:{
        addCard:(state,action)=>{
            const { id} = action.payload
            return {cards:{
                ...state.cards,
                [`${id}`]: action.payload
            }}
        }
    }
})


export const selectCards = (state) => state.cards.cards;


//export const selectCard = (id,state) => state.cards.cards[`${id}`]
export const selectCard = (id) => (state) => state.cards.cards[`${id}`]
//export const selectCard = (id) => (state) => Object.values(state.cards.cards).find(card=>card.id === id);


export const { addCard } = cardSlice.actions

export default cardSlice.reducer