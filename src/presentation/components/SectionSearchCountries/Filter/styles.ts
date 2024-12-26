import styled from "styled-components";

export const ContainerFilter = styled.select`
    outline: none;
    padding: 1rem;
    appearance: none; // esse comando remove a estilização padrão do select
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color: #FAFAFA;
    border: none;
    border-radius: 6px;

    &:hover{
        border:1px solid rgb(207, 207, 207);
    }
`


export const FilterOption = styled.option`
`