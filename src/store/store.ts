import {configureStore} from "@reduxjs/toolkit";
import ClassSlice from "../slice/ClassSlice.ts";



export const store = configureStore({
    reducer: {
           class:ClassSlice
    },
});
export type AppDispatch = typeof store.dispatch;