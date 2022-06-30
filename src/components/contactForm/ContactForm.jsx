import { useState } from 'react';
import { nanoid } from "nanoid";
import styles from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        const data = {
            id: nanoid(),
            name,
            number
        }
        onSubmit(data);
        resetForm();
    }

    const handleInputChange = evt => {
        switch (evt.currentTarget.name) {
            case "name":
                setName(evt.currentTarget.value);
                break;
            
            case "number":
                setNumber(evt.currentTarget.value);
                break;
            
            default:
                return;
        }
    }

    const resetForm = () => {
        setName('');
        setNumber('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.formLabel}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                />
            </label>

            <label className={styles.formLabel}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                    className={styles.formInput}
                />
            </label>

            <button type="submit" className={styles.formBtn}>Add contact</button>
        </form>
    );
}
