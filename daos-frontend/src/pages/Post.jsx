import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";
import Error from "../components/others/Error";
import Loading from "../components/others/Loading";
import PostInfo from "../components/page-components/post/PostInfo";
import PostPropsList from "../components/page-components/post/PostPropsList";

export default function Post() {

    const [post, setPost] = useState(null);
    
    const { id, postId } = useParams();

    const { data: ensemble, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/" + id);

    useEffect(() => {
        
        if(ensemble) {
            
            let ensemblePostsMatchingPostId = ensemble.posts.filter((post) => post._id == postId);

            ensemblePostsMatchingPostId.forEach((post) => {
                
                setPost(post);
            });
        }
    }, [ensemble])

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {post && <div>
                <PostInfo post={post} ensemble={ensemble} />
                <PostPropsList post={post} ensemble={ensemble} />
            </div>}
        </>
    );
}