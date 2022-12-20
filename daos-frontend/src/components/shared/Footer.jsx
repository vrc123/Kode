import styles from "./Footer.module.css";
import FooterTop from "../others/FooterTop";
import FooterBottom from "../others/FooterBottom";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterTop />
            <FooterBottom />
        </footer>
    );
}