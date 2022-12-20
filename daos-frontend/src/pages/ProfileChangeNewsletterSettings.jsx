import styles from "./ProfileChangeNewsletterSettings.module.css";
import useFetch from "../custom-hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import ProfileChangeNewsletterSettingsForm from "../components/forms/ProfileChangeNewsletterSettingsForm";

export default function ProfileChangeNewsletterSettings() {

    const profileId = localStorage.getItem("profileId");

    const { data: profile, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles/" + profileId);

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {profile && <div className={styles.profileChangeNewsletterSettings}>
                <div>
                    <Link to={-1}>
                        <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                    </Link>
                    <HTag hType="h1" hColor="blue" hText="Newsletter settings" />
                    <ProfileChangeNewsletterSettingsForm profileId={profileId} profile={profile} />
                </div>
            </div>}
        </>
    );
}