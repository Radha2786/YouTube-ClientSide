import {createSlice , PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'

  interface Userdata {
    username:string,
    email: string;
    password: string;
    fullName: string;
    avatar?: File;
    coverImage: File;

  }
  interface AuthState {
    status: boolean;
    userData: Userdata | null,
  }

const initialState : AuthState = {
    status:false,
    userData:null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action : PayloadAction<Userdata >) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;
