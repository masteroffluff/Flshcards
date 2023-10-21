import {createSlice} from '@reduxjs/toolkit';



export const topicsSlice = createSlice(
    {
        name:"topics",
        initialState:{
            topics:{}
        },
        reducers:{
            addTopic: (state,action)=>{
                const {id, name, icon}=action.payload;
                return {topics:{
                    ...state.topics,
                    [`${id}`]: {id,name,icon,quizIds: []}
                  }}
            }
        }

    }
)

export const selectTopic = (state) => state.topic;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
