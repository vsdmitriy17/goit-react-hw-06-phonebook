import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions.js";

export const contactsReducer = createReducer(
    {
        items: JSON.parse(window.localStorage.getItem('contacts')) ?? [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
        ],
        filter: '',
    }, {
        [addContact]: (state, action) => {
            const isNameExist = state.items.find(contact => contact.name === action.payload.name);
            isNameExist ? alert(`${action.payload.name} is already in contacts`) : state.items.push(action.payload);
            window.localStorage.setItem("contacts", JSON.stringify(state.items));
        },
        [deleteContact]: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
            window.localStorage.setItem("contacts", JSON.stringify(state.items));
        },
        [filterContact]: (state, action) => {
            state.filter = action.payload.toLowerCase();
        },
    }
);