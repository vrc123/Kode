import styles from "./MusicianInfo.module.css";
import { Link } from "react-router-dom";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";

export default function MusicianInfo({musician}) {

    return (
        <div className={styles.musicianInfo}>
            <div>
                <HTag hType="h3" hColor="red" hText={`${musician.firstName} ${musician.lastName}`}/>
                {musician.city && <LabelTag labelType="small" labelColor="grey" labelText={musician.city} />}
            </div>
            <Link to={`/musicians/${musician._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show more" />
            </Link>
        </div>
    );
}