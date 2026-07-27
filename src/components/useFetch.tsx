import { useState ,useEffect } from "react";

export default function useFetch<T>(url:string):T | null{
    const [data, setData] = useState<T | null>(null)
    useEffect(()=>{
        console.log("Effect started");
        async function fetchData (){
            console.log("Fetching...");
            const response = await fetch(url)
            const jsonData:T = await response.json()
            setData(jsonData)
            console.log(jsonData);
        }
        fetchData()
    },[url])
    return data
}