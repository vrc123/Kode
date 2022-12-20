import styles from "./InstrumentSkillLevel.module.css";
import LabelTag from "../atoms/LabelTag";

export default function InstrumentSkillLevel({skillLevel}) {
    return (
        <div className={styles.instrumentSkillLevel}>
            <LabelTag labelType="small" labelColor="white" labelText={skillLevel} />
        </div>
    );
}