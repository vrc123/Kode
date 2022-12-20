import styles from "./Error.module.css";
import HTag from "../atoms/HTag";
import PTag from "../atoms/PTag";

export default function Error({error}) {
    return (
        <div className={styles.error}>
            <HTag hType="h2" hColor="red" hText={error}/>
            <PTag pType="small" pColor="grey" pText="Try again later"/>
        </div>
    );
}