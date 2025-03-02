import styles from './SearchBar.module.scss';
import { Search } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchIconWrapper}>
                <Search className={styles.searchIcon} color="white" strokeWidth={2}/>
            </div>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search by name, address, or keyword"
            />
        </div>
    );
};

export default SearchBar;