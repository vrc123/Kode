import styles from "./EnsembleContactPerson.module.css";
import LabelTag from "../../atoms/LabelTag";
import EnsembleContactPersonInfo from "./EnsembleContactPersonInfo";

export default function EnsembleContactPerson({admin}) {

    return ( 
        <div className={styles.ensembleContactPerson}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Contact person" />
            <EnsembleContactPersonInfo admin={admin} />
        </div>
    );
}