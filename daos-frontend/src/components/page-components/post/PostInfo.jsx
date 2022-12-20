import styles from "./PostInfo.module.css";
import HTag from "../../atoms/HTag";
import PostContactButtons from "./PostContactButtons";

export default function PostInfo({post, ensemble}) {

    return ( 
        <div className={styles.postInfo}>
            <div>
                <HTag hType="h1" hColor="blue" hText={post.title} />
            </div>
            {(ensemble.admin.phone || ensemble.admin.email) && <PostContactButtons admin={ensemble.admin} />}
        </div>
    );
}