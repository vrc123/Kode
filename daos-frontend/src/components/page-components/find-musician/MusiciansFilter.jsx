import styles from "./MusiciansFilter.module.css";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";

export default function MusiciansFilter({musicians}) {

    return (
        <div className={styles.musiciansFilter}>
            <HTag hType="h1" hColor="blue" hText="Find Musician"/>
            {musicians.length != undefined && <PTag pType="normal" pColor="grey" pText={`${musicians.length} musicians found`} />}
            {musicians.length == undefined && <PTag pType="normal" pColor="grey" pText={`0 musicians found`} />}
        </div>
    );
}