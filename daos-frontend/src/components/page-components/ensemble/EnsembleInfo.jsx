import styles from "./EnsembleInfo.module.css";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";
import ButtonTag from "../../atoms/ButtonTag";

export default function EnsembleInfo({ensemble}) {

    return (
        <div className={styles.ensembleInfo}>
            <div>
                <HTag hType="h1" hColor="red" hText={ensemble.name} />
                <PTag pType="nor mal" pColor="grey" pText={`${ensemble.zipCode} ${ensemble.city}`} />
            </div>
            {ensemble.website && <a href={ensemble.website} target="_blank">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText="Visit website" />
            </a>}
        </div>
    );
}