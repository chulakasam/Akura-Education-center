import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import ExamPayment from "../model/ExamPayment.ts";
import ClassPayment from "../model/ClassPayment.ts";








const initialState1:ExamPayment[] = [];
const initialState2:ClassPayment[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/classPayment",
});
const api2 = axios.create({
    baseURL: "http://localhost:3000/examPayment",
});




export const saveExamPayment = createAsyncThunk(
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
            .addCase(getAllExams.fulfilled,(state, action)=>{
                return action.payload;
            })

    }
});



export default ExamSlice.reducer;