import {configureStore} from "@reduxjs/toolkit";
import ClassSlice from "../slice/ClassSlice.ts";
import StudentSlice from "../slice/StudentSlice.ts";
import ExamSlice from "../slice/ExamSlice.ts";



export const store = configureStore({
    reducer: {
           class:ClassSlice,
           student: StudentSlice,
           exam:ExamSlice,
    },
});
export type AppDispatch = typeof store.dispatch;