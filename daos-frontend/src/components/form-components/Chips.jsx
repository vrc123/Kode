import styles from "./Chips.module.css";
import Chip from "./Chip";

export default function Chips({selected, setSelectedGenres}) {

    function deselect(selectedGenre) {

        setSelectedGenres(selected.filter(genre => genre !== selectedGenre))
    }

    return (
        <div className={styles.chips}>
            {selected.map((selectedGenre, index) =>
                <Chip key={index} selectedGenre={selectedGenre} deselect={deselect}/>
            )}
        </div>
    );
}