import styles from "./EnsemblesDisplay.module.css";
import EnsemblesList from "./EnsemblesList";
import ButtonTag from "../../atoms/ButtonTag";
import NoMoreResultsEnsemble from "./NoMoreResultsEnsemble";

export default function EnsemblesDisplay({ensembles, visibleEnsembles, showMoreEnsembles}) {
    return (
        <div className={styles.ensemblesDisplay}>
            {ensembles.statusCode != 400 && <EnsemblesList ensembles={ensembles} visibleEnsembles={visibleEnsembles} />}
            {!(visibleEnsembles > ensembles.length || visibleEnsembles == ensembles.length || ensembles.statusCode == 400) && <ButtonTag buttonType="normal" buttonColor="white" buttonText="Show more" buttonFunction={showMoreEnsembles} />}
            {(visibleEnsembles > ensembles.length || visibleEnsembles == ensembles.length || ensembles.statusCode == 400) && <NoMoreResultsEnsemble />}
        </div>
    );
}