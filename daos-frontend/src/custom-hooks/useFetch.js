import { useState, useEffect } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Could not fetch the data!")
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });

    }, [url]);

    return { data, isLoading, error }
}