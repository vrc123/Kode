import styles from "./FooterLogo.module.css";
import Logo from "../../img/footer-logo.webp";
import PTag from "../atoms/PTag";

export default function FooterLogo() {
    return (
        <div className={styles.footerLogo}>
            <PTag pType="small" pColor="black" pText="BROUGHT TO YOU BY" />
            <img src={Logo} alt="Logo" />
        </div>
    );
}