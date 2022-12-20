import styles from "./ProfileButtons.module.css";
import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";

export default function ProfileButtons() {

    return ( 
        <div className={styles.profileButtons}>
            <Link to="/profile/edit">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText="Edit profile" />
            </Link>
            <span></span>
            <Link to="/profile/settings">    
                <ButtonTag buttonType="normal" buttonColor="white" buttonText="Settings" />
            </Link>
        </div>
    );
}