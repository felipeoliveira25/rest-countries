'use client'
import { useState } from "react"
import { ContainerFilter, FilterOption } from "./styles"

export const FilterByRegion = () => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const continents = [
        {
            name: "Filter By Region",
            value: "",
            disabled: true
        },
        {
            name: "Africa",
            value: "africa",
            disabled: false
        },
        {
            name: "Asia",
            value: "asia",
            disabled: false
        },
        {
            name: "Europe",
            value: "europe",
            disabled: false
        },
        {
            name: "America",
            value: "america",
            disabled: false
        },
        {
            name: "Oceania",
            value: "oceania",
            disabled: false
        },
        {
            name: "All Countries",
            value: "all",
            disabled: false
        },

    ]

    const handleSelectRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value)
    }
    
    return(
            <ContainerFilter
                value={selectedRegion}
                onChange={handleSelectRegion}>
                {continents.map((continent) => (
                    <FilterOption key={continent.value} disabled={continent.disabled} value={continent.value}>{continent.name}</FilterOption>
                ))}
                
            </ContainerFilter>
    )
}