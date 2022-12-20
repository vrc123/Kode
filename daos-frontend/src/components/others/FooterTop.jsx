import styles from "./FooterTop.module.css";
import Illustration from "../../img/footer-illustration.svg"
import { Link } from "react-router-dom";
import FooterNavigation from "./FooterNavigation";
import FooterLogo from "./FooterLogo";

export default function FooterTop() {
    return (
        <div className={styles.footerTop}>
            <FooterNavigation />
            <img src={Illustration} alt="Illustration" />
            <Link to="/">
                <FooterLogo />
            </Link>
        </div>
    );
}