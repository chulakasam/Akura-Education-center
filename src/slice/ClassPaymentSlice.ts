import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

import ClassPayment from "../model/ClassPayment.ts";









const initialState:ClassPayment[] = [];



const api = axios.create({

    baseURL: "http://localhost:3000/classPayment",
});





export const saveClassPayment = createAsyncThunk(
    "classPayment/add",
    async (classPayment:ClassPayment, { rejectWithValue }) => {
        try {
            const response = await api.post("/add",classPayment);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);









const ClassPaymentSlice = createSlice({
    name: 'exam',
    initialState: initialState,

    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(saveClassPayment.fulfilled, (state, action) => {
                state.push(action.payload);
            })


    }
});



export default ClassPaymentSlice.reducer;