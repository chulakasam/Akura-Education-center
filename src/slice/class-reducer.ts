import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Class from "../model/Class.ts";





const initialState:Class[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/class",
});



export const saveClass = createAsyncThunk(
    "class/add",
    async (classes:Class, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", classes);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const ClassSlice = createSlice({
    name: 'class',
    initialState: initialState,
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(saveClass.fulfilled, (state, action) => {
                state.push(action.payload);
            })

    }
});



export default ClassSlice.reducer;