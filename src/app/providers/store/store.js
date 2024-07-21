import { configureStore } from "@reduxjs/toolkit";
import AddAccountSlice from "@/features/add-account/modal/modal.js";

export const store = configureStore( {
    reducer: {
        addAccount: AddAccountSlice
    },
} )