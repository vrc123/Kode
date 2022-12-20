import styles from "./NoMoreResultsEnsemble.module.css";
import Illustration from "../../../img/no-more-results.svg";
import { Link } from "react-router-dom";
import HTag from "../../atoms/HTag";
import PTag from "../../atoms/PTag";
import ButtonTag from "../../atoms/ButtonTag";

export default function NoMoreResultsEnsemble() {
    return (
        <div className={styles.noMoreResultsEnsemble}>
            <img src={Illustration} alt="Illustration" />
            <div>
                <HTag hType="h3" hColor="blue" hText="Didn't find an ensemble for you?" />
                <PTag pType="normal" pColor="grey" pText='Customize your search or create an ensemble yourself and make some posts, so others can find you!' />
                <Link to="/profile/ensembles/create">
                    <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Create ensemble" />
                </Link>
            </div>
        </div>
    );
}