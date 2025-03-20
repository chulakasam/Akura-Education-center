import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Student from "../model/student.ts";






const initialState:Student[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/student",
});



export const saveStudent = createAsyncThunk(
    "student/add",
    async (student:Student, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", student);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllStudent=createAsyncThunk(
    "student/view",
    async ()=>{
        try{
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }
    }
);

export const deleteStudent=createAsyncThunk(
    "student/delete",
    async (email:string,{rejectWithValue})=>{
        try {
            const response = await api.delete(`/delete/${email}`);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);




const StudentSlice = createSlice({
    name: 'student',
    initialState: initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(saveStudent.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(getAllStudent.fulfilled,(state, action)=>{
                return action.payload;
            })

    }
});



export default StudentSlice.reducer;