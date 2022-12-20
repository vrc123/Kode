import styles from "./Welcome.module.css";
import Illustration from "../img/welcome-illustration.svg";
import useFetch from "../custom-hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import HTag from "../components/atoms/HTag";
import PTag from "../components/atoms/PTag";
import FindButtons from "../components/others/FindButtons";
import ButtonTag from "../components/atoms/ButtonTag";

export default function Welcome() {

    const profileId = localStorage.getItem("profileId");

    const { data: profile, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles/" + profileId);

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {profile && <div className={styles.welcome}>
                <div>
                    <HTag hType="h1" hColor="blue" hText={`Welcome ${profile.firstName}!`} />
                    <PTag pType="normal" pColor="grey" pText="Add the instruments you can play to complete your profile." />
                    <Link to="/profile">
                        <ButtonTag buttonType="normal" buttonColor="blue" buttonText="Show profile" />
                    </Link>
                    <FindButtons />
                </div>
                <img src={Illustration} alt="Illustration" />
            </div>}
        </>
    );
}