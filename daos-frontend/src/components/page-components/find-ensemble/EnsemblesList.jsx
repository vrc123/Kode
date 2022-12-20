import styles from "./EnsemblesList.module.css";
import EnsemblePreview from "./EnsemblePreview";

export default function EnsemblesList({ensembles, visibleEnsembles}) {
    return (
        <div className={styles.ensemblesList}>
            {ensembles.slice(0, visibleEnsembles).map((ensemble, index) => {
                return (
                    <EnsemblePreview key={index} ensemble={ensemble} />
                );
            })}
        </div>
    );
}