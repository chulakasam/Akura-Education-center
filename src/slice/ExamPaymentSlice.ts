import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import ExamPayment from "../model/ExamPayment.ts";









const initialState:ExamPayment[] = [];



const api = axios.create({
    baseURL: "http://localhost:3000/examPayment",
});



export const saveExamPayment = createAsyncThunk(
    "examPayment/add",
    async (examPayment:ExamPayment, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", examPayment);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const ExamPaymentSlice = createSlice({
    name: 'exam',
    initialState: initialState,

    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(saveExamPayment.fulfilled, (state, action) => {
                state.push(action.payload);
            })


    }
});



export default ExamPaymentSlice.reducer;