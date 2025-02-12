import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter([{
    path: '/',
    // 공통 적용 Component(헤더 등)
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // 페이지 라우팅
    children: [
        {
            path: '/',
            element: <RootLayout />,
        }
    ]
}]);

