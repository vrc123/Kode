import styles from "./SelectTag.module.css";

export default function SelectTag({selectedOption, selectOptions, selectPlaceholder, selectFunction}) {

    return(
        <select value={selectedOption} className={styles.selectDefaultTag} onChange={selectFunction}>
            <option value="">{selectPlaceholder}</option>
            {selectOptions.map((option, index) =>
                <option key={index} value={option}>{option}</option>
            )}
        </select>
    );
}