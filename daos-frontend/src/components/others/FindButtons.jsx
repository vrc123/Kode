import styles from "./FindButtons.module.css";
import { Link } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";

export default function FindButtons() {
    return (
        <div className={styles.findButtons}>
            <Link to="/musicians">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText="Find musician" />
            </Link>
            <span></span>
            <Link to="/ensembles">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText="Find ensembles" />
            </Link>
        </div>
    );
}