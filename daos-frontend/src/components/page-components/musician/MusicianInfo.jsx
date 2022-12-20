import styles from "./MusicianInfo.module.css";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import MusicianContactButtons from "./MusicianContactButtons";

export default function MusicianInfo({musician}) {

    if (musician.status === true) {
        musician.status = "Looking";
    } else if (musician.status === false) {
        musician.status = "Not looking";
    }

    return ( 
        <div className={styles.musicianInfo}>
            <div>
                <HTag hType="h1" hColor="red" hText={`${musician.firstName} ${musician.lastName}`} />
                <LabelTag labelType="normal" labelColor="blue" labelStatus="status" labelText={musician.status} />
            </div>
            {(musician.phone || musician.email) && <MusicianContactButtons musician={musician} />}
        </div>
    );
}