import styles from "./ProfileDescription.module.css";
import { Link } from "react-router-dom";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import PTag from "../../atoms/PTag";

export default function ProfileDescription({profile}) {

    return ( 
        <div className={styles.profileDescription}>
            <div>
                <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
                <Link to="/profile/edit">
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
            </div>
            {profile.description && <PTag pType="normal" pColor="grey" pText={profile.description} />}
            {!profile.description && <PTag pType="normal" pColor="grey" pText="No info" />}
        </div>
    );
}