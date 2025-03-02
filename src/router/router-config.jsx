import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import MainPage from "../pages/MainPage.jsx";
import RootLayout from "../layout/RootLayout.jsx";
import MenuProvider from "../components/context/MenuProvider.jsx";

export const router = createBrowserRouter([{
        path: '/',
        // 공통 적용 Component(헤더 등) : 현재 geolocation api 위치 정보 파악 넣어왔음
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: (
                    <MenuProvider>
                        <MainPage />
                    </MenuProvider>
                ),
            }
        ]
    }
]);

