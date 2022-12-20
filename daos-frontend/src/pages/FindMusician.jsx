import { useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import Loading from "../components/others/Loading";
import Error from "../components/others/Error";
import MusiciansFilter from "../components/page-components/find-musician/MusiciansFilter";
import MusiciansDisplay from "../components/page-components/find-musician/MusiciansDisplay";

export default function FindMusician() {

    const { data: musicians, isLoading, error } = useFetch("http://127.0.0.1:3000/profiles");

    let visibleMusiciansStart = 0;

    if(screen.width < 428 ) {
        visibleMusiciansStart = 6;
    } else {
        visibleMusiciansStart = 12;
    }

    const [visibleMusicians, setVisibleMusicians] = useState(visibleMusiciansStart);

    function showMoreMusicians() {
        setVisibleMusicians(visibleMusicians + visibleMusiciansStart);
    }

    return (
        <>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {musicians && <div>
                <MusiciansFilter musicians={musicians} />
                <MusiciansDisplay musicians={musicians} visibleMusicians={visibleMusicians} showMoreMusicians={showMoreMusicians} />
            </div>}
        </>
    );
}