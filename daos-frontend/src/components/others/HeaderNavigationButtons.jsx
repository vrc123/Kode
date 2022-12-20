import styles from "./HeaderNavigationButtons.module.css";
import { Link, useNavigate } from "react-router-dom";
import ButtonTag from "../atoms/ButtonTag";

export default function HeaderNavigationButtons({loggedIn, setLoggedIn}) {

    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/");
    }

    return (
        <div className={styles.headerNavigationButtons}>
            {!loggedIn && <div>
                <Link to="/sign-up">
                    <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Sign up" />
                </Link>
                <span></span>
                <Link to="/login">
                    <ButtonTag buttonType="normal" buttonColor="white" buttonText="Login" />
                </Link>
            </div>}
            {loggedIn && <ButtonTag buttonType="normal" buttonColor="white" buttonText="Logout" buttonFunction={logout} />}
        </div>
    );
}