import styles from "./EditEnsemble.module.css";
import useFetch from "../custom-hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import EditEnsembleForm from "../components/forms/EditEnsembleForm";

export default function EditEnsemble() {

    const { id } = useParams();

    const { data: ensemble, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/" + id);

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {ensemble && <div className={styles.editEnsemble}>
                <div>
                    <Link to={-1}>
                        <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                    </Link>
                    <HTag hType="h1" hColor="blue" hText="Edit ensemble" />
                    <EditEnsembleForm id={id} ensemble={ensemble} />
                </div>
            </div>}
        </>
    );
}