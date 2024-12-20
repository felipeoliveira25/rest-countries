'use client'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";

export const BoxInputSearch = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    padding-left: 1.5rem;
    width: 26rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color: #FAFAFA;
    border-radius: 6px;
    gap: 1rem;
`

export const InputField = styled.input`
    border: none;
    background: transparent;
    outline: none;
    width: 90%;
    font-size: 1rem;
`

export const IconSearch = styled(IoIosSearch)`
    
`