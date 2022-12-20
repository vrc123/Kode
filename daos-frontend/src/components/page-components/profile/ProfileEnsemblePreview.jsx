import styles from "./ProfileEnsemblePreview.module.css";
import ProfileEnsembleInfo from "./ProfileEnsembleInfo";

export default function EnsemblePreview({ensemble}) {
    return (
        <div className={styles.ensemblePreview}>
            <ProfileEnsembleInfo ensemble={ensemble} />
        </div>
    );
}