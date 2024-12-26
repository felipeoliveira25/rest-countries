'use client'

import { useEffect, useState } from "react";

export const Countries = () => {
    const [countries, setCountries] = useState([]);
   
    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch(`${NEXT_PUBLIC_API_URL}all`)
            const result = await response.json();
            setCountries(result);
        };

        getCountries();
    }, [NEXT_PUBLIC_API_URL])
    console.log(countries);
    return(
        <div>

        </div>
    )
}