import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "user",
  initialState:[],
  reducers:{
    SignUp: (state : any,action: any) => {
      
      state.push( action.payload) ;
      
    },
    SignIn: (state : any) =>{
     state = null;
    },
  },
});
export const {SignUp,SignIn} = userSlice.actions;

export const selectUser = (state : any) => state.user.user;

export default userSlice.reducer;