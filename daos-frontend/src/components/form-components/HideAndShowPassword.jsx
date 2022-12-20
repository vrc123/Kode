import styles from "./HideAndShowPassword.module.css";
import { useState } from "react";

export default function HideAndShowPassword({inputPlaceholder, inputValue, inputFunction}) {

    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState("password");
    const [buttonText, setButtonText] = useState("Show");

    function HideAndShowPassword() {
        if(showPassword == false) {
            setShowPassword(true);
            setInputType("text");
            setButtonText("Hide");
        } else {
            setShowPassword(false);
            setInputType("password");
            setButtonText("Show");
        }
    }

    return (
        <div className={styles.hideAndShowPassword}>
            <input type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={inputFunction} />
            <div onClick={HideAndShowPassword}>
                {buttonText}
            </div>
        </div>
    );
}