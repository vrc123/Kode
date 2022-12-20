import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import HTag from "../components/atoms/HTag";
import LoginForm from "../components/forms/LoginForm";
import PTag from "../components/atoms/PTag";

export default function Login({setLoggedIn}) {
    return (
        <div className={styles.login}>
            <div>
                <HTag hType="h1" hColor="blue" hText="Login" />
                <LoginForm setLoggedIn={setLoggedIn} />
                <Link to="#">
                    <PTag pType="small" pColor="grey" pText="Forgot password?" />
                </Link>
            </div>
        </div>
    );
}