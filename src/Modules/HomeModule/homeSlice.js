import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries: [],
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCountries:(state,{payload})=>{
        state.countries = payload;
    }
  },
})

export const { setCountries } = homeSlice.actions

export default homeSlice.reducer