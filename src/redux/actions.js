import { createAction } from "@reduxjs/toolkit";

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filterContact = createAction('contacts/filter');

export { addContact, deleteContact, filterContact };