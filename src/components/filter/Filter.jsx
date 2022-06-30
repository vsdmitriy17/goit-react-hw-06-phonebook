import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({value, onChangeFilter})  {
    return (
        <label className={styles.filter_label}>
            Filter names
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Enter name"
                value={value}
                className={styles.filter_input}
                onChange={onChangeFilter}
            />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}