import styles from "./PTag.module.css";

export default function PTag({pType, pColor, pText}) {
    return (
        <p className={`${styles.pDefaultTag} ${styles[pType]} ${styles[pColor]}`}>
            {pText}
        </p>
    );
}