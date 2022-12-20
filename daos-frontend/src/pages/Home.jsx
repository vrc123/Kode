import styles from "./Home.module.css"
import Illustration from "../img/home-illustration.svg";
import HTag from "../components/atoms/HTag";
import FindButtons from "../components/others/FindButtons";

export default function Home() {

    return (
        <div className={styles.home}>
            <div>
                <HTag hType="h1" hColor="red" hText="The place where musicians find musicians and play music together" />
                <FindButtons />
            </div>
            <img src={Illustration} alt="Illustration" />
        </div>
    );
}