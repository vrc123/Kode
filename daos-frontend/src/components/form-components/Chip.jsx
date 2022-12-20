import styles from "./Chip.module.css";
import deleteSelected from "../../img/deselect.svg";
import LabelTag from "../atoms/LabelTag";

export default function Chip({selectedGenre, deselect}) {

    return (
        <div className={styles.chip} onClick={() => deselect(selectedGenre)}>
            <LabelTag labelType="small" labelColor="white" labelText={selectedGenre} />
            <img src={deleteSelected} alt="Deselect" />
        </div>
    );
}