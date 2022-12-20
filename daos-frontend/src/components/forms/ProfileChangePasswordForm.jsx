import styles from "./ProfileChangePasswordForm.module.css";
import ProfileChangePasswordFormValidation from "./ProfileChangePasswordFormValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HideAndShowPassword from "../form-components/HideAndShowPassword";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Validation from "../form-components/Validation";
import Error from "../form-components/Error";

export default function ProfileChangePasswordForm({profileId}) {

    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formValidation, setFormValidation] = useState(false);
    const [formValidations, setFormValidations] = useState([]);
    const [formError, setFormError] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function passwordProp(e) {
        setPassword(e.target.value);
    }

    function changePassword(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            password,
        }

        const validation = ProfileChangePasswordFormValidation(profile);

        if(validation.length == 0) {

            fetch("http://127.0.0.1:3000/profiles/" + profileId + "/password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)
            })
            .then((res) => {
                if (!res.status === 200) {
                    throw new Error("Could not fetch the data!")
                }
                return res.json();
            })
            .then(() => {
                setIsLoading(false);
                navigate("/profile");
            })
            .catch((error) => {
                setFormError(true)
                setError(error.message);
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
            setFormValidation(true);
            setFormValidations(validation);
        }
    }

    return (
        <form className={styles.profileChangePasswordForm} onSubmit={changePassword}>
            <HideAndShowPassword inputPlaceholder="New password" inputValue={password} inputFunction={passwordProp} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes..." />}
            <Validation formValidation={formValidation} setFormValidation={setFormValidation} formValidations={formValidations} />
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}