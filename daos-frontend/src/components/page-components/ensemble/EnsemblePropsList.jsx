import styles from "./EnsemblePropsList.module.css";
import EnsembleBasicInfo from "./EnsembleBasicInfo";
import EnsembleContactPerson from "./EnsembleContactPerson";
import EnsembleCurrentPosts from "./EnsembleCurrentPosts";

export default function EnsemblePropsList({ensemble, admin}) {

    return ( 
        <div className={styles.ensemblePropsList}>
            <EnsembleBasicInfo ensemble={ensemble} />
            <EnsembleContactPerson admin={admin} />
            <EnsembleCurrentPosts ensemble={ensemble} />
        </div>
    );
}