import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter:"All"
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setActive:(state,{payload})=>{
        state.activeFilter = payload;
    }
  },
})

export const { setActive } = commonSlice.actions

export default commonSlice.reducer