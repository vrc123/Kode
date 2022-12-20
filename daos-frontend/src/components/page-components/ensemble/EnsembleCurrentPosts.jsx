import styles from "./EnsembleCurrentPosts.module.css";
import LabelTag from "../../atoms/LabelTag";
import PostsList from "../../others/PostsList"
import PTag from "../../atoms/PTag";

export default function EnsembleCurrentPosts({ensemble}) {

    return ( 
        <div className={styles.ensembleCurrentPosts}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Current posts" />
            {ensemble.posts != 0 && <PostsList ensemble={ensemble} posts={ensemble.posts} />}
            {ensemble.posts == 0 && <PTag pType="normal" pColor="grey" pText="No posts" />}
        </div>
    );
}