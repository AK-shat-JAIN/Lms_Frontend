import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {},
}

export const createAccount = createAsyncThunk("auth/signup", async (data) => {
    try {
        let res = axiosInstance.post("user/register", data); 
        toast.promise(res, {
            loading: 'Creating account...',
            success: (data) => data?.data?.message || 'Account created successfully',
            error: 'Failed to create Account',
        })

        res = await res;
        return res.data;
    } catch (error) {
        console.log(error)
        toast.error(error?.message);
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
})

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;