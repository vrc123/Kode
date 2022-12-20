import styles from "./EditInstrument.module.css";
import useFetch from "../custom-hooks/useFetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import EditInstrumentForm from "../components/forms/EditInstrumentForm";

export default function EditInstrument() {

    const [instrument, setInstrument] = useState(null)

    const { id } = useParams();

    const profileId = localStorage.getItem("profileId");

    const { data: profile, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles/" + profileId);

    useEffect(() => {
        
        if(profile) {

            let instrumentsMatchingId = profile.instruments.filter((instrument) => instrument._id == id);

            instrumentsMatchingId.forEach((instrument) => {

                setInstrument(instrument);

            });
        }
    }, [profile])

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {instrument && <div className={styles.editInstrument}>
                <div>
                    <Link to={-1}>
                        <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                    </Link>
                    <HTag hType="h1" hColor="blue" hText="Edit instrument" />
                    <EditInstrumentForm id={id} profileId={profileId} instrument={instrument} />
                </div>
            </div>}
        </>
    );
}