import styles from "./MusicianInstruments.module.css";
import LabelTag from "../../atoms/LabelTag";
import InstrumentsList from "../../others/InstrumentsList";
import PTag from "../../atoms/PTag";

export default function MusicianInstruments({musician}) {

    return ( 
        <div className={styles.musicianInstruments}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Instruments" />
            {musician.instruments.length != 0 && <InstrumentsList instruments={musician.instruments} />}
            {musician.instruments.length == 0 && <PTag pType="normal" pColor="grey" pText="No instruments" />}
        </div>
    );
}