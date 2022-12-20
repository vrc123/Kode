import styles from "./InputTagText.module.css";

export default function InputTagText({inputWidth, inputPlaceholder, inputValue, inputFunction}) {

    return (
        <input className={`${styles.inputDefaultTagText} ${styles[inputWidth]}`} type="text" placeholder={inputPlaceholder} value={inputValue} onChange={inputFunction} />
    );
}