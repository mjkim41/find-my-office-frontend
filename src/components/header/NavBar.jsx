import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './NavBar.module.scss';
import {useRef, useState} from "react";

const {
    bodyWrapper, navWrapper, navContainer, logoContainer,
    logoImage, navMenuContainer, navMenu, accordionHeader, logoAndAcordion
    , active, inactive } = styles;

const NavBar = () => {

    // 내비케이션 보이는 여부를 조정
    const [ isNavMenuVisible, setIsNavMenuVisible ] = useState(false);

    // navigation bar 여닫음
    const displayNavHandler = () => {
        setIsNavMenuVisible((prev) => !prev);
        console.log("isNavMenuVisible:", !isNavMenuVisible);
    }

    return (
        <>
                <div className={navWrapper}>
                    <nav className={navContainer}>
                        {/* ===== 로고 ====== */}
                        <div className={logoAndAcordion}>
                            <div className={accordionHeader}>
                                <ChevronDown onClick={displayNavHandler} size={24}/>
                            </div>
                            <a href="/#" className={logoContainer}>
                                <img
                                    src="https://framerusercontent.com/images/CUIhkfnfqBqnY7vpCseuLCvrVsE.png"
                                    alt="Logo"
                                    className={logoImage}
                                />
                            </a>
                        </div>
                        <div className={`${navMenuContainer} ${isNavMenuVisible ? active : inactive}`}>
                            <ul className={navMenu}>
                                <li><a href="#">Hot Trend</a></li>
                                <li><a href="#">My Favorites</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

        </>
    );
};

export default NavBar;