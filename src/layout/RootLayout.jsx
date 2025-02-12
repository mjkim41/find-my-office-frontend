import {Outlet} from "react-router-dom";
import '../assets/reset.css';

const RootLayout = () => {

    return (
        <div>
            <header>
                <div>
                    <div className='nav'>
                        네비게이션 Component 추가
                    </div>
                </div>
            </header>

            <main>
                {/* outlet : 페이지마다 개별적으로 적용되는 부분*/}
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    );
}


export default RootLayout;