import styles from "./ProfileEnsembles.module.css";
import { Link } from "react-router-dom";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import ProfileEnsemblesList from "./ProfileEnsemblesList";
import PTag from "../../atoms/PTag";

export default function ProfileEnsembles({profileEnsembles}) {

    return ( 
        <div className={styles.profileEnsembles}>
            <div className={styles.profileEnsemblesHeader}>
                <LabelTag labelType="normal" labelColor="blue" labelText="Ensembles" />
                <Link to="/profile/ensembles/create">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Create" />
                </Link>
            </div>
            {(profileEnsembles.statusCode != 400) && <ProfileEnsemblesList profileEnsembles={profileEnsembles} />}
            {(profileEnsembles.statusCode == 400) && <PTag pType="normal" pColor="grey" pText="No ensembles" />}
        </div>
    );
}