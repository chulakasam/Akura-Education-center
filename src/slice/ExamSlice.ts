import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Exams from "../model/Exam.ts";







const initialState:Exams[] = [];


const api = axios.create({
    baseURL: "http://localhost:3001/exam",
});



export const saveExam = createAsyncThunk(
    "exam/add",
    async (exams:Exams, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", exams);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);



const ExamSlice = createSlice({
    name: 'exam',
    initialState: initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(saveExam.fulfilled, (state, action) => {
                state.push(action.payload);
            })

    }
});



export default ExamSlice.reducer;