import styles from "./InputTagCheckboxChecked.module.css";

export default function InputTagCheckboxChecked({inputValue, inputFunction}) {
    
    return (
        <input checked className={styles.inputDefaultTagCheckboxChecked} type="checkbox" value={inputValue} onChange={inputFunction} />
    );
}