import Header from "../components/header/Header.jsx";
import {Outlet} from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;