import { useEffect, useState } from "react";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import ProfileInfo from "../components/page-components/profile/ProfileInfo";
import ProfilePropsList from "../components/page-components/profile/ProfilePropsList";

export default function Profile() {

    const [profile, setProfile] = useState(null);
    const [profileEnsembles, setProfileEnsembles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const profileId = localStorage.getItem("profileId");

    useEffect(() => {
        fetch("http://127.0.0.1:3000/profiles/" + profileId)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setProfile(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

        fetch("http://127.0.0.1:3000/ensembles/profiles/" + profileId)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setProfileEnsembles(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

    }, []);

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {(profile && profileEnsembles) && <div>
                <ProfileInfo profile={profile} />
                <ProfilePropsList profile={profile} profileEnsembles={profileEnsembles} />
            </div>}
        </>
    );
}