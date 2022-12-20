import styles from "./EnsembleInfo.module.css";
import { Link } from "react-router-dom"
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";

export default function EnsembleInfo({ensemble}) {
    return (
        <div className={styles.ensembleInfo}>
            <div>
                <HTag hType="h3" hColor="red" hText={ensemble.name}/>
                <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${ensemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show more" />
            </Link>
        </div>
    );
}