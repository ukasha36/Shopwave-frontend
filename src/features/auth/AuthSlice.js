import React, { useState } from 'react';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

  
import { CreateUser,
  CheckUser

 } from './AuthAPI'

const initialState = {
 
  loggedInUser : null ,
  error:null
 
}

export const CreateUserAsync = createAsyncThunk(
  "user/userData",
  async (userData) => {
    const response = await CreateUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const CheckUserAsync = createAsyncThunk(
  "user/CheckUser",
  async (loginInfo) => {
    const response = await CheckUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  
  extraReducers: (builder) => {
    builder
    .addCase(CreateUserAsync.pending, (state) => {
      state.status = "loading";
    })
    .addCase(CreateUserAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.loggedInUser = action.payload;
    })
    .addCase(CheckUserAsync.pending, (state) => {
      state.status = "loading";
    })
    .addCase(CheckUserAsync.fulfilled, (state, action) => {
      state.status = "idle";
      state.loggedInUser = action.payload;
    })
    .addCase(CheckUserAsync.rejected, (state, action) => {
      state.status = "idle";
      state.errors = action.error;
    })
      
  },
});


export const selectLoggedInUser = (state)=>state.auth.loggedInUser;
export const selectError   = (state)=>state.auth.error;
// export const { increment } = productSlice.actions;

export default counterSlice.reducer