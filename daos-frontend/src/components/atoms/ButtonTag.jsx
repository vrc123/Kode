import styles from "./ButtonTag.module.css";

export default function ButtonTag({buttonType, buttonColor, buttonText, buttonFunction}) {
    return (
        <button className={`${styles.buttonDefaultTag} ${styles[buttonType]} ${styles[buttonColor]}`} onClick={buttonFunction}>
            {buttonText}
        </button>
    );
}