import styles from "./LabelTag.module.css";

export default function LabelTag({labelType, labelColor, labelStatus, labelText}) {
    return (
        <label className={`${styles.labelDefaultTag} ${styles[labelType]} ${styles[labelColor]} ${styles[labelStatus]}`}>
            {labelText}
        </label>
    );
}