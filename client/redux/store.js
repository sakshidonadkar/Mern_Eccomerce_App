import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/auth/userReducer"; // Import userReducer
// import { productsReducer } from "./features/auth/productsReducer"; // Import productsReducer

// Configure and export Redux store using Redux Toolkit
const store = configureStore({
  reducer: {
    user: userReducer,
    // products: productsReducer,
    // Add other reducers here if needed
  },
});

export default store;

// Define API server host
export const server = "http://192.168.1.5:8080/api/v1";
