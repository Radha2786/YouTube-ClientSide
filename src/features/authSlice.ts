import {createSlice , PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'


interface AuthState {
    status: boolean;
    user: UserData | null,
  }

  interface UserData {
    _id: string;
    email: string;
    username: string;
    fullname: string;
    avatar: File;
    coverImage: File;
    watchHistory: Array<Object>;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const initialState : AuthState = {
    status:false,
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action : PayloadAction<UserData>) => {
            state.status = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.user = null;
        }
    }
});

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;
