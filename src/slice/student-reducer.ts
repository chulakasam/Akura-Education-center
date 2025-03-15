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

    }
});



export default StudentSlice.reducer;