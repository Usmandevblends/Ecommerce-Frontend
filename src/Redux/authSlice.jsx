// features/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLogin: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsLogin: (state, action) => {
            state.isLogin = action.payload;
        },
    },
});

export const { setUser, setIsLogin } = authSlice.actions;
export default authSlice.reducer;