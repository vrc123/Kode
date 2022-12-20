import styles from "./InstrumentPreview.module.css";
import InstrumentInfo from "./InstrumentInfo";
import GenreList from "./GenreList";

export default function InstrumentPreview({instrument}) {
    return (
        <div className={styles.instrumentPreview}>
            <InstrumentInfo instrument={instrument} />
            {instrument.genre != 0 && <GenreList genreList={instrument} />}
        </div>
    );
}