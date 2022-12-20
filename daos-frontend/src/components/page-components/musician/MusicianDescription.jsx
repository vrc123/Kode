import styles from "./MusicianDescription.module.css";
import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";

export default function MusicianDescription({musician}) {

    return ( 
        <div className={styles.musicianDescription}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            {musician.description && <PTag pType="normal" pColor="grey" pText={musician.description} />}
            {!musician.description && <PTag pType="normal" pColor="grey" pText="No info" />}
        </div>
    );
}