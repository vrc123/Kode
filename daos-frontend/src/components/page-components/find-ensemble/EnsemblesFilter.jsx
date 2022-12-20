import styles from "./EnsemblesFilter.module.css";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";

export default function EnsemblesFilter({ensembles}) {
    return (
        <div className={styles.ensemblesFilter}>
            <HTag hType="h1" hColor="blue" hText="Find Ensemble"/>
            {ensembles.length != undefined && <PTag pType="normal" pColor="grey" pText={`${ensembles.length} ensembles found with current posts`} />}
            {ensembles.length == undefined && <PTag pType="normal" pColor="grey" pText={`0 ensembles found with current posts`} />}
        </div>
    );
}