import styles from "./MusicianEnsembles.module.css";
import LabelTag from "../../atoms/LabelTag";
import MusicianEnsemblesList from "./MusicianEnsemblesList";
import PTag from "../../atoms/PTag";

export default function MusicianEnsembles({musicianEnsembles}) {

    return ( 
        <div className={styles.musicianEnsembles}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Ensembles" />
            {(musicianEnsembles.statusCode != 400) && <MusicianEnsemblesList musicianEnsembles={musicianEnsembles} />}
            {(musicianEnsembles.statusCode == 400) && <PTag pType="normal" pColor="grey" pText="No ensembles" />}
        </div>
    );
}