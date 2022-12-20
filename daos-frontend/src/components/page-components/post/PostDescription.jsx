import styles from "./PostDescription.module.css";
import LabelTag from "../../atoms/LabelTag";
import PTag from "../../atoms/PTag";

export default function PostDescription({post}) {

    return ( 
        <div className={styles.postDescription}>
            <LabelTag labelType="normal" labelColor="blue" labelText="Description" />
            {post.description && <PTag pType="normal" pColor="grey" pText={post.description} />}
            {!post.description && <PTag pType="normal" pColor="grey" pText="No info" />}
        </div>
    );
}