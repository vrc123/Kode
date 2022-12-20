import styles from "./ProfileChangeNewsletterSettingsForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import InputTagCheckboxChecked from "../form-components/InputTagCheckboxChecked";
import PTag from "../atoms/PTag";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Error from "../form-components/Error";

export default function ProfileChangeNewsletterSettingsForm({profileId, profile}) {

    const [newsletter, setNewsletter] = useState(profile.newsletter);
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
    function newsletterProp(e) {
        setNewsletter(e.target.checked);
    }

    function changeNewsletterSettings(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            newsletter,
        }

        fetch("http://127.0.0.1:3000/profiles/" + profileId + "/newsletter", {
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
            }).then(() => {
                setIsLoading(false);
                navigate("/profile");
            })
            .catch((error) => {
            setFormError(true)
                setError(error.message);
                setIsLoading(false);
            });
    }

    return (
        <form className={styles.profileChangeNewsletterSettingsForm} onSubmit={changeNewsletterSettings}>
            <div className={styles.checkbox}>
                {!newsletter && <InputTagCheckbox inputValue={newsletter} inputFunction={newsletterProp} />}
                {newsletter && <InputTagCheckboxChecked  inputValue={newsletter} inputFunction={newsletterProp} />}
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes..." />}
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}