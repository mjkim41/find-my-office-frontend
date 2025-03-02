import styles from './SearchContainer.module.scss';
import SearchBar from "./ui/search/SearchBar.jsx";
import SelectOption from "./ui/search/Select.jsx";

const SearchContainer = () => {
    return (
        <div className={styles.searchWrapper}>
            <SearchBar />
            <SelectOption />
        </div>
    );
};

export default SearchContainer;