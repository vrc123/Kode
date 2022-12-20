import styles from "./ProfileInstrumentPreview.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";
import DeleteInstrument from "./DeleteInstrument";
import InstrumentInfo from "../../others/InstrumentInfo";
import GenreList from "../../others/GenreList";

export default function ProfileInstrumentPreview({instrument}) {

    const [deleteInstrument, setDeleteInstrument] = useState(false)

    function showModal() {
        setDeleteInstrument(true)
    }

    return (
        <div className={styles.profileInstrumentPreview}>
            <div className={styles.profileInstrumentPreviewHeader}>
                <Link to={`/profile/instruments/${instrument._id}/edit`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Edit" />
                </Link>
                <ButtonTag buttonType="small" buttonColor="red" buttonText="Delete" buttonFunction={showModal} />
                <DeleteInstrument instrument={instrument} deleteInstrument={deleteInstrument} setDeleteInstrument={setDeleteInstrument}  />
            </div>
            <InstrumentInfo instrument={instrument} />
            {instrument.genre != 0 && <GenreList genreList={instrument} />}
        </div>
    );
}