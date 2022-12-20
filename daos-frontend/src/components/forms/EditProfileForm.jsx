import styles from "./EditProfileForm.module.css";
import EditProfileFormValidation from "./EditProfileFormValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabelTag from "../atoms/LabelTag";
import NameInputs from "../form-components/NameInputs";
import TextareaTag from "../atoms/TextareaTag";
import TerritoryInputs from "../form-components/TerritoryInputs";
import PTag from "../atoms/PTag";
import InputTagText from "../atoms/InputTagText";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import InputTagCheckboxChecked from "../form-components/InputTagCheckboxChecked";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Validation from "../form-components/Validation";
import Error from "../form-components/Error";

export default function EditProfileForm({profileId, profile}) {

    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [description, setDescription] = useState(profile.description);
    const [zipCode, setZipCode] = useState(profile.zipCode);
    const [city, setCity] = useState(profile.city);
    const [email, setEmail] = useState(profile.email);
    const [phone, setPhone] = useState(profile.phone);
    const [status, setStatus] = useState(profile.status);
    const [isLoading, setIsLoading] = useState(false);
    const [formValidation, setFormValidation] = useState(false);
    const [formValidations, setFormValidations] = useState([]);
    const [formError, setFormError] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function firstNameProp(e) {
        setFirstName(e.target.value);
    }

    function lastNameProp(e) {
        setLastName(e.target.value);
    }

    function descriptionProp(e) {
        setDescription(e.target.value);
    }

    function zipCodeProp(e) {
        setZipCode(e.target.value);
    }

    function cityProp(e) {
        setCity(e.target.value);
    }

    function emailProp(e) {
        setEmail(e.target.value);
    }

    function phoneProp(e) {
        setPhone(e.target.value);
    }
    
    function statusProp(e) {
        setStatus(e.target.checked);
    }


    function editProfile(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = { 
            firstName,
            lastName,
            description,
            zipCode,
            city, 
            email,
            phone,
            status,
        }

        const validation = EditProfileFormValidation(profile);

        if(validation.length == 0) {

            fetch("http://127.0.0.1:3000/profiles/" + profileId, {
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
                }).then((res) => {
                    setIsLoading(false);

                    if(res.statusCode == 400) {
                        setFormValidation(true);
                        setFormValidations(["This e-mail is already in use"]);
                    } else {
                        navigate("/profile");
                    }
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
        <form className={styles.editProfileForm} onSubmit={editProfile}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Name" />
            <NameInputs firstName={firstName} firstNameProp={firstNameProp} lastName={lastName} lastNameProp={lastNameProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            <TextareaTag textareaPlaceholder="Here you can write briefly about your musical experience or what you are looking for..." textareaValue={description} textareaFunction={descriptionProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Territory" />
            <TerritoryInputs zipCode={zipCode} zipCodeProp={zipCodeProp} city={city} cityProp={cityProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Contact Info" />
            <PTag pType="small" pColor="grey" pText="Your email address and mobile number are only visible to others if you have marked on your profile that you are looking for someone to play with or if you have an active posting." />
            <InputTagText inputPlaceholder="E-mail" inputValue={email} inputFunction={emailProp} />
            <InputTagText inputPlaceholder="Phone" inputValue={phone} inputFunction={phoneProp} />
            <LabelTag labelType="normal" labelColor="blue" labelText="Profile stauts" />
            <PTag pType="small" pColor="grey" pText="Are you currently looking for someone to play with? If you check the checkbox below, your profile will not appear when other musicians do a search." />
            <div className={styles.checkbox}>
                {!status && <InputTagCheckbox inputValue={status} inputFunction={statusProp} />}
                {status && <InputTagCheckboxChecked  inputValue={status} inputFunction={statusProp} />}
                <PTag pType="small" pColor="grey" pText="I'm looking for some to play with" />
            </div>
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Save changes" />}
            {isLoading && <DisabledButton disabledButtonText="Saving changes..." />}
            <Validation formValidation={formValidation} setFormValidation={setFormValidation} formValidations={formValidations} />
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}