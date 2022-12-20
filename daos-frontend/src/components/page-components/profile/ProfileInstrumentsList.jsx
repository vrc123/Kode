import styles from "./ProfileInstrumentsList.module.css";
import ProfileInstrumentPreview from "./ProfileInstrumentPreview";

export default function ProfileInstrumentsList({instruments}) {
    return (
        <div className={styles.profileInstrumentsList}>
            {instruments.map((instrument, index) => {
                return (
                    <ProfileInstrumentPreview key={index} instrument={instrument} />
                );
            })}
        </div>
    );
}