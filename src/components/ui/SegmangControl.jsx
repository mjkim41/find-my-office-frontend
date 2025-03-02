import styles from './SegmentControl.module.scss';
import {useContext, useState} from "react";
import MenuContext from "../context/menuContext.js";

const SegmentControl = () => {

    // 세그먼트 컨트롤에서 선택한 메뉴(mainpage 에서 전역관리)
    const {selectedMenu, setSelectedMenu} = useContext(MenuContext);

    // 선택할 수 있는 메뉴 옵션
    const menuOptions = ['Map', 'List'];

    // 선택한 메뉴에 하얀색으로 표시하기 위해,
    //   1) 선택된 button의 인덱스 번호롤 클릭이벤트로 받음
    //   2) menuOptions[선택된 인덱스번호] (=메뉴 이름)로 selectedMenu를 변환
    //   3) 렌더링 시, selectedMenu 훅 값 = 그리고 있는 optionsMenu[index] 값이 값을 때에만 activeBackground 클래스 부여
    // -> jsx 태그에서 meniOptions[index]
    const createActiveGroundHandler = (index) => {
        setSelectedMenu([menuOptions[index]]);
        console.log(selectedMenu);
    }

    return (
        <div className={styles.segmentControlContainer}>
            {/* 각 메뉴을 버튼으로 만듬 */}
            {menuOptions.map((option, index) => (
                <button
                    key={index}
                    className={styles.button}
                    onClick={() => createActiveGroundHandler(index)}>
                    <span className={styles.buttonText}>{option}</span> {/* span 태그 닫기 */}
                    {/* 메뉴 변경용 */}
                    { selectedMenu.includes(menuOptions[index]) && <div className={styles.activeBackground}></div> }
                </button>
            ))}
        </div>
    );
};

export default SegmentControl;
