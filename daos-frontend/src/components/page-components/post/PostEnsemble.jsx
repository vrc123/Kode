import styles from "./PostEnsemble.module.css";
import LabelTag from "../../atoms/LabelTag";
import EnsemblePreview from "../../others/EnsemblePreview";

export default function PostEnsemble({ensemble}) {

    return ( 
        <div className={styles.postEnsemble}>
            <div className={styles.postEnsembleLabel}>
                <LabelTag labelType="normal" labelColor="blue" labelText="Ensemble" />
            </div>
            <EnsemblePreview ensemble={ensemble} />
        </div>
    );
}