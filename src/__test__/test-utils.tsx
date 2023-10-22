/* import React from 'react'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import store from '../app/store'

export function wrappedinProvider({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
 */
  import React from "react";
  import { render } from "@testing-library/react";
  import { configureStore } from "@reduxjs/toolkit";
  import { Provider } from "react-redux";
  // As a basic setup, import your same slice reducers
  import topicsReducer from "../features/topics/topicsSlice";
  import quizzesReducer from "../features/quizzes/quizzesSlice"
  import cardsReducer from "../features/cards/cardsSlice"
  
  export function renderWithProviders(
    ui,
    {
      preloadedState = {},
      // Automatically create a store instance if no store was passed in
      store = configureStore({
        reducer: { 
          topics:topicsReducer,
          quizzes:quizzesReducer,
          cards:cardsReducer,
         },
        preloadedState,
      }),
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={store}>{children}</Provider>;
    }
  
    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
  }
  