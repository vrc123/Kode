import styles from "./GenreList.module.css";
import GenreComponent from "./GenreComponent";

export default function GenreList({genreList}) {
    return (
        <div className={styles.genreList}>
            {genreList.genre.map((genre, index) => {
                return (
                    <GenreComponent Preview key={index} genre={genre} />
                );
            })}
        </div>
    );
}