import CardList from "../components/CardList.jsx";
import SearchContainer from "../components/SearchContainer.jsx";
import styles from "./MainPage.module.scss";
import SegmentControl from "../components/ui/SegmangControl.jsx";
import {useContext} from "react";
import MenuContext from "../components/context/menuContext.js";
import KakaoMap from "../components/KakaoMap.jsx";

const MainPage = () => {

    // segment control에서 선택한 selected menu에 따라 카페 리스트 or 맵 중 어떤것이 보이게 할지 결정 (모바일 버전에서만 사용)
    const {selectedMenu} = useContext(MenuContext);


    return (
        <div className={styles.mainWrapper}>
            {/* 캐치프레이즈 */}
            <div className={styles.catchPhraseContainer}>
                <h1>Find the best cafe</h1>
                <h1>to work& sip!</h1>
            </div>
            <div className={styles.segmentControlContainer}>
                <SegmentControl/>
            </div>
            {/* 카페 지도 + 리스트 */}
            <div className={styles.cafeListWrapper}>
            {selectedMenu.includes('Map') && (
                // 지도 형식으로 보여주는 칸
                <div className={styles.cafesByMap}>
                    <KakaoMap />
                </div>
            )}

                {/* 리스트 형식으로 보여주는 칸 */}
                {selectedMenu.includes('List') && (
                    <div className={styles.cafesByList}>
                    <SearchContainer/>
                    <CardList/>
                </div>
            )}
            </div>

        </div>
    );
};

export default MainPage;
