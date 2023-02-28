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
                }`),
                client.fetch(`*[_type == "listeChantier"]{
                    _type,
                    _id,
                    foreman -> {
                      _id,
                      name,
                      lastName,
                      phone,
                      role
                    },
                    name,
                    plan[],
                    project -> {
                      _id,
                      _type,
                      projectCode
                    },
                    refAdressList -> {
                      _id,
                      _type,
                      building[]
                    }
                }`),
                client.fetch(`*[_type == "employes"]{
                    _type,
                    _id,
                    name,
                    lastName,
                    phone,
                    role
                }`),
                client.fetch(`*[_type == "projectCodes"]{
                    _type,
                    _id,
                    projectCode,
                    refContremaitre[] -> {
                      _id,
                      name,
                      lastName
                    }
                }`),
                
            ]).then(data => {
                setAppData({
                    ticket: data[0],
                    listeChantier: data[1],
                    employes: data[2],
                    projectCodes: data[3]
                });
                setIsLoaded(true);
            });
        }
    }, [setAppData, isLoaded, setIsLoaded]);
}