import styles from "./Rating.module.scss";
import {Coffee} from "lucide-react";

const Rating = ({rating}) => {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.starsContainer}>
                    {
                        Array.from(new Array(5)).map((_, i) => {
                            // 점수가 4.2 -> 반올림하면 리뷰점수가 4 -> 4번째 별(index 3)은 filled
                            return <Coffee size={20} stroke={'black'}
                                key={i}
                                className={i < Math.floor(rating) ? styles.starFilled : styles.starEmpty}
                            />})
                    }
                </div>
                <span className={styles.ratingValue}>{rating}</span>
            </div>
        </>
    );
};

export default Rating;