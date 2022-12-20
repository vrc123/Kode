import styles from "./HeaderNavigation.module.css";
import { Link } from "react-router-dom";
import LabelTag from "../atoms/LabelTag";
import HeaderNavigationButtons from "./HeaderNavigationButtons";

export default function HeaderNavigation({loggedIn, setLoggedIn}) {

    return (
        <nav className={styles.headerNavigation}>
            <div>
                <Link to="/">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Home" />
                </Link>
                <Link to="/musicians">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Find musician" />
                </Link>
                <Link to="/ensembles">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Find ensembles" />
                </Link>
                <Link to="/profile">
                    <LabelTag labelType="normal" labelColor="blue" labelText="Profile" />
                </Link>
            </div>
            <HeaderNavigationButtons loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </nav>
    );
}