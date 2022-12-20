import styles from "./ToggleHeaderNavigation.module.css";
import ToggleShow from "../../img/toggle-show.svg";
import ToggleHide from "../../img/toggle-hide.svg";


export default function ToggleHeaderNavigation({changeToggle, show, hide}) {
    return (
        <div className={styles.toggleHeaderNavigation}>
            {!changeToggle && <img src={ToggleShow} alt="Show header navigation" onClick={show} />}
            {changeToggle && <img src={ToggleHide} alt="Hide header navigation" onClick={hide} />}
        </div>
    );
}