import styles from "./ProfileEnsembleInfo.module.css";
import { Link } from "react-router-dom";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import ProfileEnsemblePosts from "./ProfileEnsemblePosts";

export default function ProfileEnsembleInfo({ensemble}) {
    return (
        <div className={styles.profileEnsembleInfo}>
            <div className={styles.profileEnsembleInfoHeader}>
                <Link to={`/profile/ensembles/${ensemble._id}/edit`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
                <ButtonTag buttonType="small" buttonColor="red" buttonText="Delete" />
            </div>
            <div>
                <HTag hType="h3" hColor="red" hText={ensemble.name}/>
                <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${ensemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show more" />
            </Link>
            <ProfileEnsemblePosts ensemble={ensemble} />
        </div>
    );
}