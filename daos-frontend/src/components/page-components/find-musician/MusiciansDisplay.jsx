import styles from "./MusiciansDisplay.module.css";
import MusiciansList from "./MusiciansList";
import ButtonTag from "../../atoms/ButtonTag";
import NoMoreResultsMusician from "./NoMoreResultsMusician";


export default function MusiciansDisplay({musicians, visibleMusicians, showMoreMusicians}) {

    return (
        <div className={styles.musiciansDisplay}>
            {musicians.statusCode != 400 && <MusiciansList musicians={musicians} visibleMusicians={visibleMusicians} />}
            {!(visibleMusicians > musicians.length || visibleMusicians == musicians.length || musicians.statusCode == 400) && <ButtonTag buttonType="normal" buttonColor="white" buttonText="Show more" buttonFunction={showMoreMusicians} />}
            {(visibleMusicians > musicians.length || visibleMusicians == musicians.length || musicians.statusCode == 400) && <NoMoreResultsMusician />}
        </div>
    );
}