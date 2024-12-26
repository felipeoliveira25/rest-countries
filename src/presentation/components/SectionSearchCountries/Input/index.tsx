'use client'
import { BoxInputSearch, IconSearch, InputField } from "./style"

export const InputSearch = () => {
    return(
        <BoxInputSearch>
            <IconSearch/>
            <InputField
                placeholder="Search for a country..."/>
        </BoxInputSearch>
    )
}