import styles from "./MusicianPreview.module.css";
import MusicianInfo from "./MusicianInfo";
import InstrumentsList from "../../others/InstrumentsList";

export default function MusicianPreview({musician}) {
    
    return (
        <div className={styles.musicianPreview}>
            <MusicianInfo musician={musician} />
            {musician.instruments.length != 0 && <InstrumentsList instruments={musician.instruments} />}
        </div>
    );
}