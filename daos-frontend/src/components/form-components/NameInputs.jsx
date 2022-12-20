import styles from "./NameInputs.module.css";
import InputTagText from "../atoms/InputTagText";

export default function NameInputs({firstName, firstNameProp, lastName, lastNameProp}) {

    return (
        <div className={styles.nameInputs}>
            <InputTagText inputPlaceholder="First name" inputValue={firstName} inputFunction={firstNameProp} />
            <span></span>
            <InputTagText inputPlaceholder="Last name" inputValue={lastName} inputFunction={lastNameProp} />
        </div>
    );
}