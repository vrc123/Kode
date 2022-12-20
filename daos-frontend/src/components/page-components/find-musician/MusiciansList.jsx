import styles from "./MusiciansList.module.css";
import MusicianPreview from "./MusicianPreview";

export default function MusiciansList({musicians, visibleMusicians}) {
    
    return (
        <div className={styles.musiciansList}>
            {musicians.slice(0, visibleMusicians).map((musician, index) => {
                return (
                    <MusicianPreview key={index} musician={musician} />
                );
            })}
        </div>
    );
}