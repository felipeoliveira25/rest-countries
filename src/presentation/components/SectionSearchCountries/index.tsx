'use client'
import { FilterByRegion } from "./Filter"
import { InputSearch } from "./Input"
import { ContainerSearchCountries } from "./styles"

export const SectionSearchCountries = () => {
    return (
        <ContainerSearchCountries>
            <InputSearch/>
            <FilterByRegion/>
        </ContainerSearchCountries>
    )
}