import {Outlet} from "react-router-dom";
import '../assets/reset.css';
import {useEffect, useRef, useState} from "react";
import Button from "../components/Button.jsx";

const RootLayout = () => {

    // ============== 시작 : 현재 위치 파악 관련 ============= //

    const mapLinkRef = useRef();

    // 현재 위치 파악용 hook 만들기(geolocation api 이용)
    const [location, setLocation] = useState({
        latitude : null,
        longitude : null,
        errorMessage : ''
    })

    /**  [Geolocation] 3-1. 현재 위치 파악 되었을 때 실행할 함수
     * position.coords.latitude/longitude 통해서 위도, 경도 받음
     * @param position - navigator.getlocation.getCurrentPosition 메서드에서 제공
     */
    const handleCurrentLocationSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation(prevState => ({
            ...prevState,
            latitude: latitude,
            longitude: longitude,
            errorMessage: ''
            })
        )
        console.log(latitude);
        console.log(longitude);
        mapLinkRef.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLinkRef.textContent = `위도: ${latitude} °, 경도: ${longitude} °`;
    }

    /**  [Geolocation] 3-2. 현재 위치 파악 실패했을 때 실행할 함수
     * - errorMessage를 갱신
     * @PARAM error - navigator.geolocation이 false 일 시, 자동으로 반환되는 GeolocationPositionError 객체
      */
    const handleCurrentLocationError = (error) => {
        // 1) 위치 허용여부 파악(error.code 는 api 내장)
        setLocation(prevState => ({
            ...prevState,
            errorMessage: `Oops! Looks like you said ‘no’ to location access earlier. 😢 <br> But no worries! You can change it in your browser settings and come back. We’ll be right here waiting! 🚀 <br>- Chrome : Settings > Privacy and security > Site settings > Location <br>- Sarafi : Settings > Safari > Location \n `
        }));
    }

    // [Geolocation] geolocation api를 이용한 현재 위치 파악
    useEffect(() => {

        // [Geolocation] 1. navigator.geolocation이 있는지 확인(없으면 위치 파악 불가)
        if (!navigator.geolocation) {
            setLocation(prevState => ({
                ...prevState,
                errorMessage: 'Location finding is not supported by this browser.'
             }));

        } else {

            /** [Geolocation] 2. geolocation 있을 경우, navigator.geolocatino.getCurrentPostion로 위치 파악 팝업창 호출
             * @PARAM handleCurrentLocationSuccess - 성공 시 실행할 내용
             * @PARAM handleCurrentLocationError - 에러 시 실행할 내용
             */
            navigator.geolocation.getCurrentPosition(handleCurrentLocationSuccess, handleCurrentLocationError);
        }

    }, []);


    // 버튼 누르면 위치 허용 재설정 결정 pop-up 뜸
    const requestLocationPermissionHandler = () => {
        // alert('To enable location access again, please change the location settings in your browser.');
        // window.href.location = '/';
    }

    useEffect(() => {
        if (location.latitude !== null && location.longitude !== null && mapLinkRef.current) {
            mapLinkRef.current.href = `https://www.openstreetmap.org/#map=18/${location.latitude}/${location.longitude}`;
            mapLinkRef.current.textContent = `Latitude: ${location.latitude} °, Longitude: ${location.longitude} °`;
        }
    }, [location]);


    // ============== 끝 : 현재 위치 파악 관련 ============= //

    return (
        <div>
            <header>
                <div>
                    <div className='nav'>
                        {/* 위치 정보 표시 부분*/}
                        <div>
                            {location.errorMessage ? <div dangerouslySetInnerHTML={{__html:location.errorMessage}}></div> : <a id="map-link" ref={mapLinkRef} target="_blank">You're here...</a>}
                        </div>
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