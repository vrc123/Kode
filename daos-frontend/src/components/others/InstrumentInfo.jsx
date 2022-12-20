import styles from "./InstrumentInfo.module.css";
import { useState, useEffect } from "react";
import HTag from "../atoms/HTag";
import LabelTag from "../atoms/LabelTag";
import InstrumentSkillLevel from "./InstrumentSkillLevel";

export default function InstrumentInfo({instrument}) {

    const [skillLevel, setSkillLevel] = useState(""); 

    useEffect(() => {

        if (instrument.skillLevel == "1 - Beginner") {
            setSkillLevel("1");
        } else if (instrument.skillLevel == "2 - Intermediate") {
            setSkillLevel("2");
        } else if (instrument.skillLevel == "3 - Advanced") {
            setSkillLevel("3");
        } else if (instrument.skillLevel == "4 - Expert") {
            setSkillLevel("4");
        }

    }, [])

    return (
        <div className={styles.instrumentInfo}>
            <HTag hType="h3" hColor="blue" hText={instrument.instrumentName} />
            <div>
                <LabelTag labelType="small" labelColor="grey" labelText="Skill level" />
                <InstrumentSkillLevel skillLevel={skillLevel} />
            </div>
        </div>
    );
}