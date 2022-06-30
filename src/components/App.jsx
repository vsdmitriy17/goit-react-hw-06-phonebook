import styles from './App.module.css';
import ContactList from './contactList/ContactList.jsx';
import ContactForm from './contactForm/ContactForm.jsx';
import Filter from './filter/Filter.jsx';
import { addContact, deleteContact, filterContact } from "../redux/actions.js";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
    const contacts = useSelector(state => state.contactsReducer.items.filter(contact => contact.name.toLowerCase().includes(state.contactsReducer.filter)));
    // console.log(contacts);
    const filter = useSelector(state => state.contactsReducer.filter);
    const dispatch = useDispatch();
    const formSubmit = data => {
        dispatch(addContact(data));
    };
    const changeFilter = data => {
        dispatch(filterContact(data));
    }
    const deleteContacts = data => {
        dispatch(deleteContact(data));
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm onSubmit={formSubmit}/>

            <h2 className={styles.title}>Contacts</h2>
            <Filter filter={filter} onChangeFilter={changeFilter}/>
            <ContactList contacts={contacts} onDeleteContact={deleteContacts}/>
        </div>
    );
}
