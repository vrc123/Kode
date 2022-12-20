import styles from "./MusicianPropsList.module.css";
import MusicianDescription from "./MusicianDescription";
import MusicianInstruments from "./MusicianInstruments";
import MusicianEnsembles from "./MusicianEnsembles";

export default function MusicianPropsList({musician, musicianEnsembles}) {

    return ( 
        <div className={styles.musicianPropsList}>
            <MusicianDescription musician={musician} />
            <MusicianInstruments musician={musician} />
            <MusicianEnsembles musicianEnsembles={musicianEnsembles} />
        </div>
    );
}