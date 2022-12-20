import styles from "./DisabledButton.module.css";

export default function DisabledButton({disabledButtonText}) {

    return (
        <button disabled className={styles.disabledButton}>
            {disabledButtonText}
        </button>
    );
}