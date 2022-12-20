import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HTag from "../atoms/HTag";
import PTag from "../atoms/PTag";
import HeaderNavigation from "../others/HeaderNavigation";
import ToggleHeaderNavigation from "../others/ToggleHeaderNavigation";

export default function Header({loggedIn, setLoggedIn}) {

    const [changeLogo, setChangeLogo] = useState(false);
    const [showHeaderNavigation, setShowHeaderNavigation] = useState(false);
    const [changeToggle, setChangeToggle] = useState(false);

    useEffect(() => {

        if(screen.width < 428 ) {
            setShowHeaderNavigation(true);
            setChangeLogo(false)
        } else {
            setShowHeaderNavigation(false);
            setChangeLogo(true)
        }

    }, []);

    function show() {
        setChangeToggle(true);
    }

    function hide() {
        setChangeToggle(false);
    }

    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <HTag hType="h3" hColor="red" hText="Music Interaction" />
                    {changeLogo && <PTag pType="small" pColor="grey" pText="Created by DAOS - Danish Amateur Orchestra Cooperation" />}
                    {!changeLogo && <PTag pType="small" pColor="grey" pText="Created by DAOS" />}
                </Link>
                {!showHeaderNavigation && <HeaderNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
                {showHeaderNavigation && <ToggleHeaderNavigation changeToggle={changeToggle} show={show} hide={hide} />}
            </div>
            {changeToggle && <HeaderNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        </header>
    );
}