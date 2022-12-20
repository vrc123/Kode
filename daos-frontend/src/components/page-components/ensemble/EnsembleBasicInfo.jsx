import styles from "./EnsembleBasicInfo.module.css";
import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";
import GenreList from "../../others/GenreList";

export default function EnsembleBasicInfo({ensemble}) {

    let theEnsemblePlays;

    if (ensemble.continuously === true && ensemble.projectBased === true) {
        theEnsemblePlays = "Continuously and projectbased";
    } else if (ensemble.continuously === true && ensemble.projectBased === false) {
        theEnsemblePlays = "Continuously";
    } else if (ensemble.continuously === false && ensemble.projectBased === true) {
        theEnsemblePlays = "Projectbased";
    } else {
        theEnsemblePlays = "";
    }

    return ( 
        <div className={styles.ensembleBasicInfo}> 
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            {ensemble.description && <PTag pType="normal" pColor="grey" pText={ensemble.description} />}
            {!ensemble.description && <PTag pType="normal" pColor="grey" pText="No info" />}
            <span></span>
            <LabelTag labelType="normal" labelColor="blue" labelText="Active musicians" />
            <PTag pType="normal" pColor="grey" pText={ensemble.activeMusicians} />
            <span></span>
            <LabelTag labelType="normal" labelColor="blue" labelText="Practice frequency" />
            {ensemble.practiceFrequency && <PTag pType="normal" pColor="grey" pText={ensemble.practiceFrequency} />}
            {!ensemble.practiceFrequency && <PTag pType="normal" pColor="grey" pText="No info" />}
            <span></span>
            <LabelTag labelType="normal" labelColor="blue" labelText="The ensemble plays.." />
            {theEnsemblePlays && <PTag pType="normal" pColor="grey" pText={theEnsemblePlays} />}
            {!theEnsemblePlays && <PTag pType="normal" pColor="grey" pText="No info" />}
            <span></span>
            <LabelTag labelType="normal" labelColor="blue" labelText="Genres" />
            {ensemble.genre.length != 0 && <GenreList genreList={ensemble} />}
            {ensemble.genre.length == 0 && <PTag pType="normal" pColor="grey" pText="No info" />}
        </div>
    );
}