import styles from "./Validation.module.css";
import Modal from "react-modal";
import HTag from "../atoms/HTag";
import PTag from "../atoms/PTag";
import LabelTag from "../atoms/LabelTag";
import ButtonTag from "../atoms/ButtonTag";

export default function Validation({formValidation, setFormValidation, formValidations}) {

    function closeModal() {
        setFormValidation(false)
    }

    return (
        <Modal overlayClassName={styles.validationOverlay} className={styles.validation} isOpen={formValidation} onRequestClose={closeModal}>
            <HTag hType="h2" hColor="red" hText="Error"/>
            <PTag pType="small" pColor="grey" pText="Change the following"/>
            <div>
                {formValidations.map((formValidation, index) => {
                    return (
                        <LabelTag key={index} labelType="normal" labelColor="red" labelText={`- ${formValidation}`} />
                    );
                })}
            </div>
            <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Close" buttonFunction={closeModal} />
        </Modal>
    );
}