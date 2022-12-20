import styles from "./PostContactButtons.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonTag from "../../atoms/ButtonTag";

export default function PostContactButtons({admin}) {

    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (admin.phone) {
            setPhone("+45 " + admin.phone.slice(0, 2) + " " + admin.phone.slice(2, 4) + " " + admin.phone.slice(4, 6) + " " + admin.phone.slice(6, 8));
        }
    })

    return ( 
        <div className={styles.postContactButtons}>
            {admin.phone && <Link to="#">
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={phone} />
            </Link>}
            {(admin.phone && admin.email) && <span></span>}
            {admin.email && <Link to="#">    
                <ButtonTag buttonType="normal" buttonColor="white" buttonText={admin.email} />
            </Link>}
        </div>
    );
}