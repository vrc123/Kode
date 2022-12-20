import styles from "./DeleteInstrument.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import HTag from "../../atoms/HTag";
import ButtonTag from "../../atoms/ButtonTag";
import PTag from "../../atoms/PTag";
import LabelTag from "../../atoms/LabelTag";

export default function DeleteInstrument({instrument, deleteInstrument, setDeleteInstrument}) {


    //const [isLoading, setIsLoading] = useState(false);
    //const [formError, setFormError] = useState(false);
    //const [error, setError] = useState(null);

    const profileId = localStorage.getItem("profileId");

    const navigate = useNavigate();

    function closeModal() {
        setDeleteInstrument(false)
    }

    function deleteSelectedInstrument(e) {
        //e.preventDefault();

        //setIsLoading(true);

        fetch("http://127.0.0.1:3000/profiles/" + profileId + "/instrument/" + instrument._id, {
            method: "Delete",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(instrument)
            })
            .then((res) => {
                if (!res.status === 200) {
                    throw new Error("Could not fetch the data!")
                }
                return res.json();
            }).then(() => {
                //setIsLoading(false);
                setDeleteInstrument(false)
                location.reload();
                //navigate("/profile");
            })
            .catch((error) => {
                //setFormError(true)
                //setError(error.message);
                //setIsLoading(false);
            });
    }

    return (
        <Modal overlayClassName={styles.deleteInstrumentOverlay} className={styles.deleteInstrument} isOpen={deleteInstrument} onRequestClose={closeModal}>
            <HTag hType="h2" hColor="red" hText="Delete instrument"/>
            <LabelTag labelType="normal" labelColor="red" labelText="Are you sure you want to delete this instrument?" />
            <ButtonTag buttonType="normal" buttonColor="white" buttonText="No" buttonFunction={closeModal} />
            <ButtonTag buttonType="normal" buttonColor="red" buttonText="Yes" buttonFunction={deleteSelectedInstrument} />
        </Modal>
    );
}