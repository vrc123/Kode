import styles from "./TerritoryInputs.module.css";
import InputTagText from "../atoms/InputTagText";

export default function TerritoryInputs({zipCode, zipCodeProp, city, cityProp}) {

    return (
        <div className={styles.territoryInputs}>
            <InputTagText inputWidth="narrow" inputPlaceholder="Zip code" inputValue={zipCode} inputFunction={zipCodeProp} />
            <span></span>
            <InputTagText inputWidth="wide" inputPlaceholder="City" inputValue={city} inputFunction={cityProp} />
        </div>
    );
}