
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from "../Modules/HomeModule/homeSlice";
import commonReducer from "../Modules/Common/commonSlice";
export const store = configureStore({
  reducer: {home:homeReducer,common:commonReducer},
})