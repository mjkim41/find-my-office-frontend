import { useLocation, useNavigate, useRouteError} from 'react-router-dom';
// 랩탑, 홈 이모티콘
import { Laptop, HomeIcon } from "lucide-react";

import styles from './ErrorPage.module.scss';
import {useEffect} from "react";
import Button from "../components/Button.jsx";

const ErrorPage = () => {

    // router에서 erorr 정보 전달 받음
    const error = useRouteError();
    // router에서 에러가 난 url 경로 전달
    const pathName = useLocation().pathname;

    // 이전 페이지 기억(이전 페이지 이동 버튼 용)
    const navigate = useNavigate();

    useEffect(() => {
        // 에러 url과 코드(404 등) 로그
        console.error(`Error Code : ${error.status}\n Error Path : ${pathName}`);
    }, []);

    // css deconstructuring
    const {buttonWrapper, container, content, description, iconWrapper, icon, title} = styles;

    // 이전 페이지 버튼 누를 시, 상황에 따른 이동
    const goBackHandler = () => {
        // (새로고침 시 window.history.length는 1이 됨) 초기 진입 시 아닐 시 : 이전 페이지로 이동
        // 초기 진입실 시 : 메인 페이지로 이동
        if(window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/')
        }
    }

    return (
        <div className={container}>
            <div className={content}>
                <div className={iconWrapper}>
                    <Laptop className={styles.icon}/>
                </div>

                <h1 className={title}>{error.status === 404 ? 'Page Not Found' : error.status}</h1>
                <p className={description}>
                    {error.status === 404 ? `Oops! The page you're looking for doesn't exist.` : 'Oops!'}
                </p>

                <div className={buttonWrapper}>
                    <Button onClick={goBackHandler} content={window.history.length > 1 ? 'Return to Previous Page' : 'Return Home'}>
                        <HomeIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default ErrorPage;