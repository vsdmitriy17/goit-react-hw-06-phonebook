import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsReducer.js";

export const store = configureStore({
    reducer: {
        contactsReducer,
    },
});