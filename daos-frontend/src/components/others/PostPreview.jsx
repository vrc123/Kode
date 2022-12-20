import styles from "./PostPreview.module.css";
import { Link } from "react-router-dom";
import PTag from "../atoms/PTag";
import ButtonTag from "../atoms/ButtonTag";
import PostPreviewInstrument from "./PostPreviewInstrument";

export default function PostPreview({ensemble, post}) {
    
    return (
        <div className={styles.postPreview}>
            <PostPreviewInstrument post={post} />
            <PTag pType="normal" pColor="grey" pText={post.title} />
            <Link to={`/ensembles/${ensemble._id}/posts/${post._id}`}>
                <ButtonTag buttonType="small" buttonColor="white"  buttonText="Show post" />
            </Link>
        </div>
    );
}