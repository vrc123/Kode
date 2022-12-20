import styles from "./AddEnsemblePost.module.css";
import { Link } from "react-router-dom";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import AddEnsemblePostForm from "../components/forms/AddEnsemblePostForm";

export default function AddEnsemblePost() {
    return (
        <div className={styles.addEnsemblePost}>
            <div>
                <Link to={-1}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                </Link>
                <HTag hType="h1" hColor="blue" hText="Add post" />
                <AddEnsemblePostForm />
            </div>
        </div>
    );
}