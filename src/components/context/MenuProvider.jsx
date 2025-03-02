import MenuContext from "./menuContext.js";
import {useEffect, useState} from "react";

// segment control에서 선택한 메뉴를 전달하는 provider
const MenuProvider = ({children}) => {

    const [selectedMenu, setSelectedMenu] = useState([Map]);

    // 화면 크기가 768px 이하이면 모바일, 그 이상은 PC로 판단하여 selectedMenu 초기 값 변경
    // 모바일은 map만, pc는 map+list 보이게
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setSelectedMenu(['Map']); // 모바일에서는 'Map'만 보이도록
            } else {
                setSelectedMenu(['Map', 'List']); // PC에서는 'Map'과 'List' 둘 다 보이도록
            }
        };

        // 초기 화면 크기 체크
        handleResize();

        // 리사이즈 이벤트가 발생할 때마다 handleResize 실행
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <MenuContext.Provider value={{
            selectedMenu: selectedMenu,
            setSelectedMenu: setSelectedMenu
        }}>
            {children}
        </MenuContext.Provider>
    );
};

export default MenuProvider;