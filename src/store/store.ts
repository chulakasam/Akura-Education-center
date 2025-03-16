import {configureStore} from "@reduxjs/toolkit";
import ClassSlice from "../slice/ClassSlice.ts";
import StudentSlice from "../slice/StudentSlice.ts";



export const store = configureStore({
    reducer: {
           class:ClassSlice,
           student: StudentSlice
    },
});
export type AppDispatch = typeof store.dispatch;