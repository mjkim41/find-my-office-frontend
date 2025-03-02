import React, {createContext} from 'react';

// 모바일 버전에서 토글해서 선택한 카페리스트 보는 방법(map 혹은 list)를 선택
const MenuContext = createContext({
    selectedMenu: '',
    setSelectedMenu: (selectedMenu) => {},
})

export default MenuContext;