import { useParams } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import EnsembleInfo from "../components/page-components/ensemble/EnsembleInfo";
import EnsemblePropsList from "../components/page-components/ensemble/EnsemblePropsList";

export default function Ensemble() {

    const { id } = useParams();

    const { data: ensemble, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles/" + id);

    return ( 
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {ensemble && <div>
                <EnsembleInfo ensemble={ensemble} />
                <EnsemblePropsList ensemble={ensemble} admin={ensemble.admin} />
            </div>}
        </>
    );
}