import {createSlice} from '@reduxjs/toolkit';







const topicsSlice = createSlice(
    {
        name:"topics",
        initialState:{
            topics:{}
        },
        reducers:{
            addTopic: (state,action)=>{
                state[action.payload.id]=action.payload;
                state[action.payload.id].quizIds=[];
                
            }
        }

    }
)