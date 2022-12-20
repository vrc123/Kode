import styles from "./ProfileEnsemblePosts.module.css";
import { Link } from "react-router-dom";
import LabelTag from "../../atoms/LabelTag";
import ButtonTag from "../../atoms/ButtonTag";
import ProfilePostsList from "./ProfilePostsList";
import PTag from "../../atoms/PTag";

export default function ProfileEnsemblePosts({ensemble}) {
    return (
        <div className={styles.profileEnsemblePosts}>
            <div className={styles.profileEnsemblePostsHeader}>
                <LabelTag labelType="normal" labelColor="blue" labelText="Posts" />
                <Link to={`/profile/ensembles/${ensemble._id}/posts/add`}>
                    <ButtonTag buttonType="small" buttonColor="white" buttonText="Add" />
                </Link>
            </div>
            {ensemble.posts.length != 0 && <ProfilePostsList ensemble={ensemble} posts={ensemble.posts} />}
            {ensemble.posts.length == 0 && <PTag pType="normal" pColor="grey" pText="No posts" />}
        </div>
    );
}