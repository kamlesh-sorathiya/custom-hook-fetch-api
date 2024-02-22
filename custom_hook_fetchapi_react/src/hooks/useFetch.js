import { useState,useEffect, useRef } from "react"

export const useFetch = (url,_body) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const body = useRef(_body);

    useEffect(() => {

        const controller = new AbortController();
        const fetchedData  = async () => {
            
        setLoading(true);
        try{
            const resp = await fetch(url,{signal:controller.signal},body);
            if(!resp.ok) {
                throw new Error(resp.statusText)
            }
            const result = await resp.json();
            setLoading(false);
            setData(result);
            setError("");
        } catch(err){
            setLoading(false);
            setError(err.message);
        }
      }
     fetchedData();
     return () => controller.abort();

    }, [url,body])
    

    return {data,loading,error}
}