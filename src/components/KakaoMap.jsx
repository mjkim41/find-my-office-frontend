    import React, {useContext, useEffect, useRef, useState} from 'react';
    import LocationContext from "./context/locationContext.js";
    import styles from './KakaoMap.module.scss';
    import LocationButton from "./ui/LocationButton.jsx";
    import markerImageFile from '../assets/location-pin.png';

    // kakaomap 맵 초기 디스플레이 시 중심 좌표 설정(geolocation api 에서 위치 불러왔으면 불러온 위치로, 못 불러왔으면 내가 임시로 설정한 위치로)
    const setMapDefaultLocation = (userLocation) => {

        // 주소 파악 안될시에 기본 위치
        const DEFAULT_LOCATION = {
            latitude: -37.481620,
            longitude: 144.584440,
        };

        if (userLocation.latitude !== null) {
            return {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude
            }
        } else {
            return DEFAULT_LOCATION;
        }
    }



    const KakaoMap = () => {

        // 맵 상태관리
        const [kakaoMap, setKakaoMap] = useState(null);
        // 마커 상태관리
        const [marker, setMarker] = useState(null);

        // 맵을 담을 컨테이너 태그
        const mapContainerRef = useRef(null);

        // locationProvider을 이용한 위치 파악
        const userLocation = useContext(LocationContext);

        // kakaomap 맵 초기 디스플레이 시 중심 좌표 설정(geolocation api 에서 위치 불러왔으면 불러온 위치로, 못 불러왔으면 내가 임시로 설정한 위치로)
        const {latitude, longitude} = setMapDefaultLocation(userLocation);


        // 맵 로직
        const initializeMap = () => {
            // 카카오맵 객체 생성되었는지 먼저 확인
            if (window.kakao && window.kakao.maps) {

                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude), // 맵 로딩 시 중심 좌표
                    level: 3
                };

                // 맵 생성하기
                const newKakaoMap = new window.kakao.maps.Map(mapContainerRef.current, options);

                // ====== 마커 생성 ==== //

                const markerImageOption = {
                    imageSrc: markerImageFile,
                    imageSize: new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
                    imageOption: {offset: new window.kakao.maps.Point(0, 0)} // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                }

                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                const markerImage = new window.kakao.maps.MarkerImage(markerImageOption.imageSrc, markerImageOption.imageSize, markerImageOption.imageOption);
                const markerPosition = new window.kakao.maps.LatLng(latitude, longitude); // 마커가 표시될 위치입니다

                // 마커를 생성합니다
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage // 마커이미지 설정
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(newKakaoMap);

                // //마커가 표시 될 위치
                // const markerPosition = new window.kakao.maps.LatLng(
                //     latitude,
                //     longitude
                //     // 이부분의 위,경도 또한 가끔 가는 카페입니다.. 놀라지마시길..!
                // );
                //
                //
                // // 마커를 생성
                // const marker = new window.kakao.maps.Marker({
                //     position: markerPosition,
                // });
                //
                // // 마커를 지도 위에 표시
                // marker.setMap(newKakaoMap);
                //
                // setKakaoMap(newKakaoMap);

            } else {
                console.error("Kakao Maps API가 로드되지 않았습니다.");
            }
        }


        useEffect(() => {
            initializeMap();
        }, [userLocation.latitude, userLocation.longitude]);

        // 현위치로 돌아가기
        const handleRelocate = () => {
            initializeMap();
        }

        return (
            <div className={styles.mapWrapper}>
                <div
                    ref={mapContainerRef}
                    className={styles.kakaoMap}
                    id="kakaoMap"

                ></div>
                <LocationButton className={styles.locationButton} onHandleRelocate={handleRelocate} />
            </div>
        );
    };

    export default KakaoMap;
