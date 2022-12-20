import styles from "./EnsemblePreview.module.css";
import { Link } from "react-router-dom";
import HTag from "../atoms/HTag";
import LabelTag from "../atoms/LabelTag";
import ButtonTag from "../atoms/ButtonTag";

export default function ensemblePreview({ensemble}) {

    return ( 
        <div className={styles.ensemblePreview}>
            <div>
                <HTag hType="h3" hColor="red" hText={ensemble.name} />
                <LabelTag labelType="small" labelColor="grey" labelText={`${ensemble.city} • ${ensemble.activeMusicians}`} />
            </div>
            <Link to={`/ensembles/${ensemble._id}`}>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Show more" />
            </Link>
        </div>
    );
}