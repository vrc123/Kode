import styles from "./PostPreviewInstrument.module.css";
import { useEffect, useState } from "react";
import HTag from "../atoms/HTag";
import LabelTag from "../atoms/LabelTag";
import InstrumentSkillLevel from "../others/InstrumentSkillLevel";

export default function PostPreviewInstrument({post}) {

    const [minimumSkillLevel, setMinimumSkillLevel] = useState(""); 

    useEffect(() => {

        if (post.minimumSkillLevel == "1 - Beginner") {
            setMinimumSkillLevel("1");
        } else if (post.minimumSkillLevel == "2 - Intermediate") {
            setMinimumSkillLevel("2");
        } else if (post.minimumSkillLevel == "3 - Advanced") {
            setMinimumSkillLevel("3");
        } else if (post.minimumSkillLevel == "4 - Expert") {
            setMinimumSkillLevel("4");
        }

    }, [])

    return (
        <div className={styles.postPreviewInstrument}>
            <HTag hType="h3" hColor="blue" hText={post.instrument}/>
            <div>
                <LabelTag labelType="small" labelColor="grey" labelText="Skill level"/>
                <InstrumentSkillLevel skillLevel={minimumSkillLevel + "+"} />
            </div>
        </div>
    );
}