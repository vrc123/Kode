import styles from "./ProfileEnsemblesList.module.css";
import ProfileEnsemblePreview from "./ProfileEnsemblePreview";

export default function ProfileEnsemblesList({profileEnsembles}) {

    return ( 
        <div className={styles.profileEnsemblesList}>
            {profileEnsembles.map((profileEnsemble, index) => {
                return (
                    <ProfileEnsemblePreview key={index} ensemble={profileEnsemble} />
                );
            })}
        </div>
    );
}