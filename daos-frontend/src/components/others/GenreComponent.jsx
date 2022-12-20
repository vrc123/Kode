import styles from "./GenreComponent.module.css";

export default function GenreComponent({genre}) {
    return (
        <div className={styles.genreComponent}>
            {genre}
        </div>
    );
}