import styles from "./AddInstrument.module.css";
import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import AddInstrumentForm from "../components/forms/AddInstrumentForm";

export default function AddInstrument() {

    return (
        <div className={styles.addInstrument}>
            <div>
                <Link to={-1}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back"/>
                </Link>
                <HTag hType="h1" hColor="blue" hText="Add instrument" />
                <AddInstrumentForm />
            </div>
        </div>
    );
}