import styles from "./InstrumentsList.module.css";
import InstrumentPreview from "./InstrumentPreview";

export default function InstrumentsList({instruments}) {
    return (
        <div className={styles.instrumentsList}>
            {instruments.map((instrument, index) => {
                return (
                    <InstrumentPreview key={index} instrument={instrument} />
                );
            })}
        </div>
    );
}