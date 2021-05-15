import { createAction, createReducer } from '@reduxjs/toolkit';

export const add = createAction('message/add');

const initialState = { messages: [] }

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(add, (state, action) => {
      state.messages = [...state.messages, action.payload]
    })
})

export default chatReducer;
