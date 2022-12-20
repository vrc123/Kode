import styles from "./EnsemblePreview.module.css";
import EnsembleInfo from "./EnsembleInfo";
import PostsList from "../../others/PostsList";

export default function EnsemblePreview({ensemble}) {
    return (
        <div className={styles.ensemblePreview}>
            <EnsembleInfo ensemble={ensemble} />
            <PostsList ensemble={ensemble} posts={ensemble.posts} />
        </div>
    );
}