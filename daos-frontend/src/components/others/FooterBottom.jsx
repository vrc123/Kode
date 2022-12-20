import styles from "./FooterBottom.module.css";
import { Link } from "react-router-dom";
import PTag from "../atoms/PTag";

export default function FooterBottom() {
    return (
        <div className={styles.footerBottom}>
            <Link to="#">
                <PTag pType="small" pColor="white" pText="Privacy policy" />
            </Link>
        </div>
    );
}