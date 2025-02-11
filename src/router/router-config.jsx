import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";

export const router = createBrowserRouter([{
    index: true,
    // 공통 적용 Component(헤더 등)
    element: <RootLayout />,
    // 페이지 라우팅
    // children: [
    //     {
    //         path: '/',
    //         element:
    //     }
    // ]
}]);

