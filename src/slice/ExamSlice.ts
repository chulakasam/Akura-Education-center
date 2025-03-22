import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Exams from "../model/Exam.ts";
import ExamRegistration from "../model/ExamRegistration.ts";







const initialState:Exams[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/exam",
});
const api2 = axios.create({
    baseURL: "http://localhost:3000/examRegistration",
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

export const getAllExams=createAsyncThunk(
    "exam/view",
    async ()=>{
        try{
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }
    }
)

export const deleteExam=createAsyncThunk(
    "exam/delete",
    async (examName:string,{rejectWithValue})=>{
        try {
            const response = await api.delete(`/delete/${examName}`);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const examRegister=createAsyncThunk(
    "examRegistration/add",
    async (examRegistration:ExamRegistration,{rejectWithValue})=>{
        try{
            const response = await api2.post("/add", examRegistration);
            return response.data;
        }catch (error:any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }

)







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