import Card from "./ui/Card.jsx";
import styles from "./CardList.module.scss";

const CardList = () => {
    return (
        <div className={styles.cardListContainer}>
            <Card
                name="Fairfield Coffee"
                address="11Beon-Gil 31, Solbat-ro, Gwanak-gu, Seoul"
                hours="09:00 - 22:00"
                distance="100m"
                rating={4.2}
                images={[
                    "https://framerusercontent.com/images/NzYy4ifjJvBKZmY5AhyY8cNvYw.jpg",
                    "https://framerusercontent.com/images/NzYy4ifjJvBKZmY5AhyY8cNvYw.jpg"
                ]}
            />
            <Card
                name="Fairfield Coffee"
                address="11Beon-Gil 31, Solbat-ro, Gwanak-gu, Seoul"
                hours="09:00 - 22:00"
                distance="100m"
                rating={4.2}
                images={[
                    "https://framerusercontent.com/images/NzYy4ifjJvBKZmY5AhyY8cNvYw.jpg",
                    "https://framerusercontent.com/images/NzYy4ifjJvBKZmY5AhyY8cNvYw.jpg"
                ]}
            />
        </div>
    );
};

export default CardList;