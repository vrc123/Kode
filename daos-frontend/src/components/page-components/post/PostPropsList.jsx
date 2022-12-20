import styles from "./PostPropsList.module.css";
import PostDescription from "./PostDescription";
import PostInstrument from "./PostInstrument";
import PostEnsemble from "./PostEnsemble";

export default function PostPropsList({post, ensemble}) {

    return ( 
        <div className={styles.postPropsList}>
            <PostDescription post={post} />
            <PostInstrument post={post} />
            <PostEnsemble ensemble={ensemble} />
        </div>
    );
}