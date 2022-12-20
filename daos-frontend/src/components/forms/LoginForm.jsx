import styles from "./LoginForm.module.css";
import LoginFormValidation from "./LoginFormValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputTagText from "../atoms/InputTagText";
import HideAndShowPassword from "../form-components/HideAndShowPassword";
import ButtonTag from "../atoms/ButtonTag";
import DisabledButton from "../form-components/DisabledButton";
import Validation from "../form-components/Validation";
import Error from "../form-components/Error";


export default function LoginForm({setLoggedIn}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formValidation, setFormValidation] = useState(false);
    const [formValidations, setFormValidations] = useState([]);
    const [formError, setFormError] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function emailProp(e) {
        setEmail(e.target.value);
    }

    function passwordProp(e) {
        setPassword(e.target.value);
    }

    function login(e) {
        e.preventDefault();

        setIsLoading(true);

        const profile = {  
            email, 
            password,
        }

        const validation = LoginFormValidation(profile);

        if(validation.length === 0) {

            fetch("http://127.0.0.1:3000/profiles/auth/login", {
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
            }).then((res) => {
                setIsLoading(false);

                if(res.statusCode == 401) {
                    setFormValidation(true);
                    setFormValidations(["Password is wrong"]);
                } else if (res.statusCode == 404) {
                    setFormValidation(true);
                    setFormValidations(["No profile is using this email"]);
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
        <form className={styles.loginForm} onSubmit={login}>
            <InputTagText inputPlaceholder="E-mail" inputValue={email} inputFunction={emailProp} />
            <HideAndShowPassword inputPlaceholder="Password" inputValue={password} inputFunction={passwordProp} />
            {!isLoading && <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Login" />}
            {isLoading && <DisabledButton disabledButtonText="Logging in..." />}
            <Validation formValidation={formValidation} setFormValidation={setFormValidation} formValidations={formValidations} />
            <Error formError={formError} setFormError={setFormError} error={error} />
        </form>
    );
}