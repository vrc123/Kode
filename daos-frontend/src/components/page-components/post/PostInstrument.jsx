import styles from "./PostInstrument.module.css";
import LabelTag from "../../atoms/LabelTag";
import PostPreviewInstrument from "../../others/PostPreviewInstrument";
import GenreList from "../../others/GenreList";

export default function PostInstrument({post}) {

    return (
        <div className={styles.postInstrument}>
            <div className={styles.postInstrumentLabel}>
                <LabelTag labelType="normal" labelColor="blue" labelText="Instrument" />
            </div>
            <div className={styles.postPreviewInstrument}>
                <PostPreviewInstrument post={post} />
                {post.genre != 0 && <GenreList genreList={post} />}
            </div>
        </div>
    );
}