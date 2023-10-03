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
        toast.error(error?.message);
    }
})

export const logIn = createAsyncThunk("auth/login", async (data) => {
    try {
        let res = axiosInstance.post("user/login", data); 
        toast.promise(res, {
            loading: 'Wait! Logging you in...',
            success: (data) => data?.data?.message || 'Logged in successfully',
            error: 'Failed to Login',
        })

        return (await res).data;
    } catch (error) {
        toast.error(error?.message);
    }
})

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, action)=>{
            console.log(action)
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', action?.payload?.user?.role);
            localStorage.setItem('data', JSON.stringify(action?.payload?.user));
            state.isLoggedIn = true;
            state.role = action?.payload?.role;
            state.data = action?.payload?.user;
        })
        // [createAccount.fulfilled]: (state, action) => {
        //     localStorage.setItem('isLoggedIn', true);
        //     localStorage.setItem('role', action.payload.role);
        //     localStorage.setItem('data', JSON.stringify(action.payload.data));
        //     state.isLoggedIn = true;
        //     state.role = action.payload.role;
        //     state.data = action.payload.data;
        // },
        // [logIn.fulfilled]: (state, action) => {
        //     localStorage.setItem('isLoggedIn', true);
        //     localStorage.setItem('role', action.payload.role);
        //     localStorage.setItem('data', JSON.stringify(action.payload.data));
        //     state.isLoggedIn = true;
        //     state.role = action.payload.role;
        //     state.data = action.payload.data;
        // },
    }
})

export const {} = AuthSlice.actions;
export default AuthSlice.reducer;