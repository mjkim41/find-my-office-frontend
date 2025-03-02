import { ThumbsUp } from 'lucide-react';
import styles from './Card.module.scss';
import Rating from "./Rating.jsx";


const Card = ({address, hours, distance, rating, images, name}) => {
    return (
        <div className={styles.wrapper}>
            {/* 데코레이션용 회색 바 */}
            <div className={styles.topBar}/>

            <div className={styles.cardContainer}>
                {/* 윗 부분 */}
                <div className={styles.descriptionContainer}>
                    {/* 상호명 + 리뷰 평점 */}
                    <div className={styles.titleAndRating}>
                        <h1 className={styles.title}>{name}</h1>
                        <Rating rating={rating}/>
                    </div>
                    {/* 주소 */}
                    <span className={styles.address}>{address}</span>
                    <div className={styles.hoursAndDistanceContainer}>
                        <span className={styles.hour}>{hours}</span>
                        <span className={styles.divider}>ㅣ</span>
                        <span className={styles.distance}>{distance}</span>
                    </div>
                </div>

                <div className={styles.imageGrid}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img
                                src={image}
                                alt={`${name} interior ${index + 1}`}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Card;
