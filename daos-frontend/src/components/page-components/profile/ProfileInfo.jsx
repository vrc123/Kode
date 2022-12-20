import styles from "./ProfileInfo.module.css";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ProfileButtons from "./ProfileButtons";

export default function ProfileInfo({profile}) {

    if (profile.status === true) {
        profile.status = "Looking";
    } else if (profile.status === false) {
        profile.status = "Not looking";
    }

    return ( 
        <div className={styles.profileInfo}>
            <div>
                <HTag hType="h1" hColor="red" hText={`${profile.firstName} ${profile.lastName}`} />
                <LabelTag labelType="normal" labelColor="blue" labelStatus="status" labelText={profile.status} />
            </div>
            <ProfileButtons />
        </div>
    );
}