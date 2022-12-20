import styles from "./InputTagCheckbox.module.css";

export default function InputTagCheckbox({inputValue, inputFunction}) {
    
    return (
        <input className={styles.inputDefaultTagCheckbox} type="checkbox" value={inputValue} onChange={inputFunction} />
    );
}