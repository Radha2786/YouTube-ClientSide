import {createSlice , PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'


interface AuthState {
    status: boolean;
    userData: object | null,
  }

  interface Userdata {
    
  }

const initialState : AuthState = {
    status:false,
    userData: Userdata | null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action : PayloadAction<Userdata>) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;
