import styles from "./Error.module.css";
import Modal from "react-modal";
import HTag from "../atoms/HTag";
import ButtonTag from "../atoms/ButtonTag";
import PTag from "../atoms/PTag";

export default function DeleteInstrument({formError, setFormError, error}) {

    function closeModal() {
        setFormError(false)
    }

    return (
        <Modal overlayClassName={styles.errorOverlay} className={styles.error} isOpen={formError} onRequestClose={closeModal}>
            <HTag hType="h2" hColor="red" hText={error}/>
            <PTag pType="small" pColor="grey" pText="Try again later"/>
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Close" buttonFunction={closeModal} />
        </Modal>
    );
}