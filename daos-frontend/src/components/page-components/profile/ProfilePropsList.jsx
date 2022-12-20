import styles from "./ProfilePropsList.module.css";
import ProfileDescription from "./ProfileDescription";
import ProfileInstruments from "./ProfileInstruments";
import ProfileEnsembles from "./ProfileEnsembles";

export default function ProfilePropsList({profile, profileEnsembles}) {

    return ( 
        <div className={styles.profilePropsList}>
            <ProfileDescription profile={profile} />
            <ProfileInstruments profile={profile} />
            <ProfileEnsembles profileEnsembles={profileEnsembles} />
        </div>
    );
}