import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({filter, onChangeFilter})  {
    return (
        <label className={styles.filter_label}>
            Filter names
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Enter name"
                value={filter}
                className={styles.filter_input}
                onChange={e => onChangeFilter(e.target.value)}
            />
        </label>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}