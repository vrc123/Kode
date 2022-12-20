import styles from "./MusicianEnsemblesList.module.css";
import EnsemblePreview from "../../others/EnsemblePreview";

export default function MusicianEnsemblesList({musicianEnsembles}) {

    return ( 
        <div className={styles.musicianEnsemblesList}>
            {musicianEnsembles.map((musicianEnsemble, index) => {
                return (
                    <EnsemblePreview key={index} ensemble={musicianEnsemble} />
                );
            })}
        </div>
    );
}