import styles from "./FooterNavigation.module.css";
import Instagram from "../../img/instagram.svg";
import Facebook from "../../img/facebook.svg";
import { Link } from "react-router-dom";
import HTag from "../atoms/HTag";
import LabelTag from "../atoms/LabelTag";

export default function FooterNavigation() {
    return (
        <div className={styles.footerNavigation}>
            <HTag hType="h3" hColor="white" hText="Music Interaction" />
            <nav>
                <Link to="/">
                    <LabelTag labelType="normal" labelColor="white" labelText="Home" />
                </Link>
                <Link to="/musicians">
                    <LabelTag labelType="normal" labelColor="white" labelText="Find musician" />
                </Link>
                <Link to="/ensembles">
                    <LabelTag labelType="normal" labelColor="white" labelText="Find ensembles" />
                </Link>
                <Link to="/profile">
                    <LabelTag labelType="normal" labelColor="white" labelText="Profile" />
                </Link>
            </nav>
            <div>
                <Link to="#">
                    <img src={Instagram} alt="Instagram" />
                </Link>
                <Link to="#">
                    <img src={Facebook} alt="Facebook" />
                </Link>
            </div>
        </div>
    );
}