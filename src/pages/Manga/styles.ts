import styled from 'styled-components'

export const MangaContainer = styled.div `
    margin: 1%;

    @media (max-width: 864px) {
        margin: 0px;
        padding: 0px;
    }
`

export const Title = styled.h1 `
    margin-left: 100px;

    @media (max-width: 864px) {
        font-size: 16px;
        margin: 0px;
        padding: 2%;
    }
`

export const CardsManga = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 107px;

    @media (max-width: 864px) {
        margin: 0px;
    }
`