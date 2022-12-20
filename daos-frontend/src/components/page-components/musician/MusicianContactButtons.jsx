import styles from "./MusicianContactButtons.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";

export default function MusicianContactButtons({musician}) {

    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (musician.phone) {
            setPhone("+45 " + musician.phone.slice(0, 2) + " " + musician.phone.slice(2, 4) + " " + musician.phone.slice(4, 6) + " " + musician.phone.slice(6, 8));
        }
    })

    return ( 
        <div className={styles.musicianContactButtons}>
            {musician.phone && <Link to="#">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={phone} />
            </Link>}
            {(musician.phone && musician.email) && <span></span>}
            {musician.email && <Link to="#">    
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={musician.email} />
            </Link>}
        </div>
    );
}