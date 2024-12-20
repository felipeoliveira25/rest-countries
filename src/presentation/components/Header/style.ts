'use client'
import styled from "styled-components"

export const HeaderContainer = styled.header`
    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.elements};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
    box-shadow: rgba(32, 32, 32, 0.2) 0px 8px 24px;

    @media (max-width: 600px) {
        padding: 2rem;
    }


`

export const HeaderTitle = styled.span`
    color: ${({theme}) => theme.colors.text};
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`

export const ToggleThemeContainer = styled.div`
    display: flex;
    color: ${({theme}) => theme.colors.text};
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
`
export const ToggleThemeText = styled.p`
    margin-bottom: 0.2rem;

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`