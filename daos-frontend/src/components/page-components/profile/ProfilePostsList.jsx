import styles from "./ProfilePostsList.module.css";
import ProfilePostPreview from "./ProfilePostPreview";

export default function ProfilePostList({ensemble, posts}) {
    return (
        <div className={styles.profilePostsList}>
            {posts.map((post, index) => {
                return (
                    <ProfilePostPreview key={index} ensemble={ensemble} post={post} />
                );
            })}
        </div>
    );
}