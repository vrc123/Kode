import styles from "./TextareaTag.module.css";

export default function TextareaTag({textareaPlaceholder, textareaValue, textareaFunction}) {
    return (
        <textarea className={styles.textAreaDefaultTag} placeholder={textareaPlaceholder} value={textareaValue} onChange={textareaFunction} ></textarea>
    );
}