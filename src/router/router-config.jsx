import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import {Component} from "react";
import MainPage from "../pages/MainPage.jsx";


class Main extends Component {
    render() {
        return null;
    }
}

export const router = createBrowserRouter([{
    path: '/',
    // 공통 적용 Component(헤더 등) : 현재 geolocation api 위치 정보 파악 넣어왔음
    element: <MainPage />,
    errorElement: <ErrorPage />,
    // 페이지 라우팅
    // children: [
    //     {
    //         path: '/',
    //         element: <MainPage />,
    //     }
    // ]
}]);

