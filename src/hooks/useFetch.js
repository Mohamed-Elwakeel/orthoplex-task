import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, dependencies = [], disabled = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (disabled) return;
        if (!url) {
            setError("No URL provided");
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, ...dependencies, disabled]);
    /* eslint-enable react-hooks/exhaustive-deps */
    return { data, loading, error };
};

export default useFetch;
