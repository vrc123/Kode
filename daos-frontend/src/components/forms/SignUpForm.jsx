import styles from "./SignUpForm.module.css";
import SignUpFormValidation from "./SignUpFormValidation";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NameInputs from "../form-components/NameInputs";
import InputTagText from "../atoms/InputTagText";
import HideAndShowPassword from "../form-components/HideAndShowPassword";
import InputTagCheckbox from "../atoms/InputTagCheckbox";
import PTag from "../atoms/PTag";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Validation from "../form-components/Validation";
import Error from "../form-components/Error";

export default function SignUpForm({setLoggedIn}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conditions, setConditions] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [status, setStatus] = useState(false);
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

    function emailProp(e) {
        setEmail(e.target.value);
    }

    function passwordProp(e) {
        setPassword(e.target.value);
    }

    function conditionsProp(e) {
        setConditions(e.target.checked);
    }

    function newsletterProp(e) {
        setNewsletter(e.target.checked);
    }

    function signUp(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = { 
            firstName,
            lastName, 
            email, 
            password, 
            conditions, 
            newsletter,
            status,
        }

        const validation = SignUpFormValidation(profile);

        if (validation.length === 0) {

            fetch("http://127.0.0.1:3000/profiles/auth/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(profile)
            })
            .then((res) => {
                if (!res.status === 201) {
                    throw new Error("Could not fetch the data!")
                }
                return res.json();
            })
            .then((res) => {
                setIsLoading(false);

                if(res.statusCode == 500) {
                    setFormValidation(true);
                    setFormValidations(["This e-mail is already in use"]);
                } else {
                    localStorage.setItem("token", (res.access_token));
                    localStorage.setItem("profileId", (res.profileId));
                    setLoggedIn(true);
                    navigate("/welcome");
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
        <form className={styles.signUpForm} onSubmit={signUp}>
            <NameInputs firstName={firstName} firstNameProp={firstNameProp} lastName={lastName} lastNameProp={lastNameProp} />
            <InputTagText inputPlaceholder="E-mail" inputValue={email} inputFunction={emailProp} />
            <HideAndShowPassword inputPlaceholder="Password" inputValue={password} inputFunction={passwordProp} />
            <div className={styles.checkbox}>
                <InputTagCheckbox inputValue={conditions} inputFunction={conditionsProp} />
                <p className={styles.pCustom}>I accept the <Link to="#">conditions</Link></p>
            </div>
            <div className={styles.checkbox}>
                <InputTagCheckbox inputValue={newsletter} inputFunction={newsletterProp} />
                <PTag pType="small" pColor="grey" pText="Sign up for the DAOS newsletter" />
            </div>
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Sign up" />}
            {isLoading && <DisabledButton isLoading={isLoading} disabledButtonText="Signing up..." />}
            <Validation formValidation={formValidation} setFormValidation={setFormValidation} formValidations={formValidations} />
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}