import { useState, useEffect } from 'react';
import styles from './App.module.css';
import ContactList from './contactList/ContactList.jsx';
import ContactForm from './contactForm/ContactForm.jsx';
import Filter from './filter/Filter.jsx';

export default function App() {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(window.localStorage.getItem("contacts")) ?? [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
        ];
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        window.localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts])

    const formSubmit = data => {
        setContacts(prevState => {
            const isNameExist = prevState.find(contact => contact.name === data.name);
            return (isNameExist ? alert(`${data.name} is already in contacts`) : [data, ...prevState]);
        })
    };

    const deleteContact = (currentId) => {
        setContacts(prevState => {
            return prevState.filter(contact => contact.id !== currentId)
        });
    };

    const changeFilter = (evt) => {
        setFilter(evt.currentTarget.value);
    }

    const getVisibleContacts = () => {
        const filterNormalized = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalized));
    }

    const visibleContacts = getVisibleContacts();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm onSubmit={formSubmit}/>

            <h2 className={styles.title}>Contacts</h2>
            <Filter value={filter} onChangeFilter={changeFilter}/>
            <ContactList contacts={visibleContacts} onDeleteContact={deleteContact}/>
        </div>
    );
}
