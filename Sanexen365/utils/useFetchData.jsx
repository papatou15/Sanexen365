import client from "./Sanity";
import { useEffect } from "react";

/**
 * Fonction pour aller chercher les données dans le cloud de Sanity.io
 * 
 * Commence par fetch les data par des query GROQ, puis les retourne dans setAppData, qui est
 * défini dans App.js. Refresh le component quand les trois conditions sont remplies.
 * 
 * @param {state} setAppData Inscrit les données retournées dans la promesse
 * @param {boolean} isLoaded Vérifie si les data sont fetch ou pas
 * @param {state} setIsLoaded Change le state de isLoaded
 */
export default function useFetchData(setAppData, isLoaded, setIsLoaded){
    useEffect(() => {
        if (!isLoaded){
            Promise.all([
                client.fetch(`*[_type == "ticket"]{
                    _id,
                    adress,
                    nom,
                    phone,
                    email,
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