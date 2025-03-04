import {useEffect, useState} from "react";
import LocationContext from "./locationContext.js";

const LocationProvider = ({children}) => {

    // 현재 위치 파악용 hook 만들기(geolocation api 이용)
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        message: ''
    })

    /**  3. 현재 위치 파악 되었을 때 실행할 함수
     * position.coords.latitude/longitude 통해서 위도, 경도 받음
     * @param position - navigator.getlocation.getCurrentPosition 메서드에서 제공
     */
    const handleCurrentLocationSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({
            latitude: latitude,
            longitude: longitude,
            message: 'User location detected successfully.'
        });
    }

    /**  4. 현재 위치 파악 실패했을 때 실행할 함수
     * - front에 전달할 message를 갱신
     * @PARAM error - navigator.geolocation이 false 일 시, 자동으로 반환되는 GeolocationPositionError 객체
     */
    const handleCurrentLocationError = (error) => {
        // 1) 위치 허용여부 파악(error.code 는 api 내장)
        setLocation({
            latitude: null,
            longitude: null,
            message: `Oops! Looks like you said ‘no’ to location access earlier. 😢 <br> But no worries! You can change it in your browser settings and come back. We’ll be right here waiting! 🚀 <br>- Chrome : Settings > Privacy and security > Site settings > Location <br>- Sarafi : Settings > Safari > Location \n `
        });
    }

    // 1. geolocation api을 이용한 위치 파악
    useEffect(() => {

        // 1) navigator.geolocation이 있는지 확인(브라우저에서 위치 파악 허용하는지 자체 여부)
        //  -> 없으면 없다는 메시지 발송
        if (!navigator.geolocation) {
            setLocation({
                latitude: null,
                longitude: null,
                message: 'Location finding is not supported by this browser.'
            });
        } else {
            /** 2) geolocation 있을 경우, navigator.geolocation.getCurrentPostion로 위치 파악 팝업창 호출
             * @PARAM handleCurrentLocationSuccess - 성공 시 실행할 내용
             * @PARAM handleCurrentLocationError - 에러 시 실행할 내용
             */
            navigator.geolocation.getCurrentPosition(handleCurrentLocationSuccess, handleCurrentLocationError);
        }

    }, []); // end of useEffect

    return (
        <LocationContext.Provider value={location}>
            {children}
        </LocationContext.Provider>
    );

}

export default LocationProvider;


