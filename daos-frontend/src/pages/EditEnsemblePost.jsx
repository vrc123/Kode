import styles from "./EditEnsemblePost.module.css";
import useFetch from "../custom-hooks/useFetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import ButtonTag from "../components/atoms/ButtonTag";
import HTag from "../components/atoms/HTag";
import EditEnsemblePostForm from "../components/forms/EditEnsemblePostForm";

export default function EditEnsemblePost() {

    const [post, setPost] = useState(null)

    const { id, postid } = useParams();

    const profileId = localStorage.getItem("profileId");

    const { data: ensemble, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/" + id);

    useEffect(() => {
        
        if(ensemble) {

            let postMatchingId = ensemble.posts.filter((post) => post._id == postid);

            postMatchingId.forEach((post) => {

                setPost(post);

            });
        }
    }, [ensemble])

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {post && <div className={styles.editEnsemblePost}>
                <div>
                    <Link to={-1}>
                        <ButtonTag buttonType="small" buttonColor="white" buttonText="Back" />
                    </Link>
                    <HTag hType="h1" hColor="blue" hText="Edit post" />
                    <EditEnsemblePostForm id={id} postid={postid} post={post} />
                </div>
            </div>}
        </>
    );
}