import styles from "./EnsembleContactPersonInfo.module.css";
import { Link } from "react-router-dom";
import HTag from "../../atoms/HTag";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";

export default function EnsembleContactPersonInfo({admin}) {

    return ( 
        <div className={styles.ensembleContactPersonInfo}>
            <div>
                <HTag hType="h3" hColor="red" hText={`${admin.firstName} ${admin.lastName}`} />
                {admin.city && <LabelTag labelType="small" labelColor="grey" labelText={admin.city} />}
            </div>
            <Link to={`/musicians/${admin._id}`}>
                <ButtonTag buttonType="small" buttonColor="white" buttonText="Show more" />
            </Link>
        </div>
    );
}