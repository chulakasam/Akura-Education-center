import {configureStore} from "@reduxjs/toolkit";
import ClassSlice from "../slice/ClassSlice.ts";
import StudentSlice from "../slice/StudentSlice.ts";
import ExamSlice from "../slice/ExamSlice.ts";
import UserSlice from "../slice/UserSlice.ts";



export const store = configureStore({
    reducer: {
           class:ClassSlice,
           student: StudentSlice,
           exam:ExamSlice,
           users : UserSlice,
    },
});
export type AppDispatch = typeof store.dispatch;