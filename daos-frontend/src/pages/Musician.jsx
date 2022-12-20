import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import MusicianInfo from "../components/page-components/musician/MusicianInfo";
import MusicianPropsList from "../components/page-components/musician/MusicianPropsList";

export default function Musician() {

    const [musician, setMusician] = useState(null);
    const [musicianEnsembles, setMusicianEnsembles] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetch("http://127.0.0.1:3000/profiles/" + id)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setMusician(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

        fetch("http://127.0.0.1:3000/ensembles/profiles/" + id)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setMusicianEnsembles(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

    }, []);

    return ( 
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {(musician && musicianEnsembles) && <div>
                <MusicianInfo musician={musician} />
                <MusicianPropsList musician={musician} musicianEnsembles={musicianEnsembles} />
            </div>}
        </>
    );
}