import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './MainPage.module.scss';

const {
    bodyWrapper, navWrapper, navContainer, logoContainer,
    logoImage, navMenuContainer, navMenu, accordionHeader, logoAndAcordion } = styles;

const MainPage = () => {
    return (
        <>
            {/* ==================== 헤더 =========================== */}
            <div className={bodyWrapper}>
                <div className={navWrapper}>
                    <nav className={navContainer}>
                        {/* ===== 로고 ====== */}
                        <div className={logoAndAcordion}>
                            <div className={accordionHeader}>
                                <ChevronUp size={24}/>
                            </div>
                            <a href="/" className={logoContainer}>
                                <img
                                    src="https://framerusercontent.com/images/CUIhkfnfqBqnY7vpCseuLCvrVsE.png"
                                    alt="Logo"
                                    className={logoImage}
                                />
                            </a>
                        </div>
                        {/* ==== 메뉴 ====== */}
                        <div className={navMenuContainer}>
                            <ul className={navMenu}>
                                <li><a href="#">Hot Trend</a></li>
                                <li><a href="#">My Favorites</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MainPage;
