import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

import Classes from "../model/Classes.ts";

const initialState:Classes[] = [];


const api = axios.create({
    baseURL: "http://localhost:3000/class",
});



export const saveClass = createAsyncThunk(
    "class/add",
    async (classes:Classes, { rejectWithValue }) => {
        try {
            const response = await api.post("/add", classes);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const getAllClasses=createAsyncThunk(
    "class/view",
    async ()=>{
        try {
            const response = await api.get("/view");
            return response.data;
        }catch (error:any){
            return error.response?.data || error.message;
        }

    }
)


export const deleteClass=createAsyncThunk(
    "class/delete",
    async (className:string,{rejectWithValue})=>{
        try{
            const response=await api.delete(`/delete/${className}`);
            return response.data;
        }catch (error:any){
            return  rejectWithValue(error.response?.data || error.message);
        }
    }
)

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
            .addCase(getAllClasses.fulfilled, (state, action)=>{
                console.log("Fetched Classes:", action.payload);
                return action.payload;
            })
    }
});



export default ClassSlice.reducer;