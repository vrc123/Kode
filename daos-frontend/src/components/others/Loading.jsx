import styles from "./Loading.module.css";
import HTag from "../atoms/HTag";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <HTag hType="h2" hColor="red" hText="Loading"/>
            <div></div>
        </div>
    );
}