import styles from "./ProfileInstruments.module.css";
import { Link } from "react-router-dom";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import ProfileInstrumentsList from "./ProfileInstrumentsList";
import PTag from "../../atoms/PTag";

export default function ProfileInstruments({profile}) {

    return ( 
        <div className={styles.profileInstruments}>
            <div className={styles.profileInstrumentsHeader}>
                <LabelTag labelType="normal" labelColor="blue" labelText="Instruments" />
                <Link to="/profile/instruments/add">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Add" />
                </Link>
            </div>
            {profile.instruments.length != 0 && <ProfileInstrumentsList instruments={profile.instruments} />}
            {profile.instruments.length == 0 && <PTag pType="normal" pColor="grey" pText="No instruments" />}
        </div>
    );
}