import client from "./Sanity";
import { useEffect } from "react";

export default function useFetchData(setAppData, isLoaded, setIsLoaded){
    useEffect(() => {
        if (!isLoaded){
            Promise.all([
                client.fetch(`*[_type == "ticket"]{
                    _id,
                    adress,
                    nom,
                    issue,
                    issueBreakOptions,
                    description,
                    status
                }`)
            ]).then(data => {
                setAppData({
                    ticket: data[0]
                });
                setIsLoaded(true);
            });
        }
    }, [setAppData, isLoaded, setIsLoaded]);
}