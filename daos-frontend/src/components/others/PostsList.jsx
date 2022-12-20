import styles from "./PostsList.module.css";
import PostPreview from "./PostPreview";

export default function PostList({ensemble, posts}) {
    return (
        <div className={styles.postsList}>
            {posts.map((post, index) => {
                return (
                    <PostPreview key={index} ensemble={ensemble} post={post} />
                );
            })}
        </div>
    );
}