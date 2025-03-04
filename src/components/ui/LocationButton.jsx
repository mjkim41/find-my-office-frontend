import styles from './LocationButton.module.scss';
import { Locate } from 'lucide-react';

const LocationButton = ({onHandleRelocate}) => {

    return (
        <div className={styles.locationButtonContainer}>
            <button
                onClick={onHandleRelocate}
                className={styles.locationButton}
                type="button"
            >
                {/* Locate는 lucide에서 받은 아이콘임 */}
                <Locate className={styles.icon} />
            </button>
        </div>
    );
}
export default LocationButton;
