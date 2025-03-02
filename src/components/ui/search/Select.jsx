import {ChevronDown} from 'lucide-react';
import styles from './Select.module.scss';
import {useState} from "react";

const SelectOption = () => {

    // 정렬 기준 선택 드롭다운 메뉴 여닫기
    const [ isOptionsDropdownOpen, setOptionsDropdownOpen ] = useState(false);
    // 선택된 정렬 옵션 가져오기
    const [ selectedSortOption, setSelectedSortOption ] = useState('Choose');

    // select options 부여용
    const sortOptions = [
        // value : 내부로직에 사용할 값. label : 사용자에게 보여줄 값
        {value: 'Relevance', label: 'Relevance'},
        {value: 'Distance', label: 'Distance'},
        {value: 'Rating', label: 'Rating'}
    ];

    // 정렬 기준 선택 드롭다운 메뉴 여닫기
    const showDropdownOptionsHandler = () => {
        setOptionsDropdownOpen((prev) => !prev);
    }

    // 정렬 기준 변경
    const sortOptionChangeHandler = (selectedSortOption) => {
        setSelectedSortOption(selectedSortOption);
        setOptionsDropdownOpen(false);
    }

    return (
        //  select + options 컨테이너
        <div className={styles.selectContainer}>

            {/*select 부분 눈에 보이는 부분 컨테이너 */}
            <div
                className={styles.select}
                onClick={showDropdownOptionsHandler}>
                {/* 선택된 옵션 표시 */}
                <span className={styles.selectedText}>{selectedSortOption}</span>
                {/*화살표 아이콘*/}
                <ChevronDown
                    className={`${styles.chevron}`}
                />
            </div>

            {/* 옵션 선택하는 부분 */}
            {isOptionsDropdownOpen &&
                <div className={styles.dropdown}>
                {sortOptions.map(option => {
                    return (
                        <div
                            key={option.value}
                            className={`${styles.option}`}
                            onClick={() => sortOptionChangeHandler(option.value)}
                        >
                            {option.label}
                        </div>
                    );
                })}
            </div>}

        </div>

    );
};

export default SelectOption;