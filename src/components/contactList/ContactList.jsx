import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={styles.contactList_item}>
                        <p className={styles.item_text}>{contact.name}: <span className={styles.item_span}>{contact.number}</span></p>
                        <button type="button" className={styles.item_btn} onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
