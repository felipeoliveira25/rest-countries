'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({theme}) => theme.colors.background};
        overflow-x: hidden;
        min-height: 100vh;
        min-width: 100vw;
        max-width: 100vw;
        width: 100vw;
    }
`