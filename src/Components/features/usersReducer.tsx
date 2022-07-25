import { createSlice } from '@reduxjs/toolkit'

export const usersReducer = createSlice({
  name: "users",
  initialState:{users:[]},
  reducers:{
   allUsers:(state : any,action)=>{
    debugger
    state.users = [ action.payload] 
   },
   deleteUsers:(state:any,action) =>{
   state.users = action.payload
   },
  },
});
export const {allUsers,deleteUsers} = usersReducer.actions;


export default usersReducer.reducer;