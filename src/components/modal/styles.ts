import styled from 'styled-components'

export const Modal = styled.div `
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(14, 13, 13, 0.47);
`

export const ModalContainer = styled.div `
    display: flex;
    padding: 2%;
    width: 890px;
    height: 470px;
    border-radius: 8px;
    background-color: #F3F2F2;
`

export const ImageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 317px;
        height: 420px;
        border-radius: 4px;
     }
`

export const AttributesContainer = styled.div `
    display: flex;
    flex-direction: column;
`

export const Title = styled.div `
    display: flex;
    justify-content: space-between;
    margin-left: 40px;

    h1 {
        font-size: 30px;
        font-family: 'Poppins';
        color: #000;
    }

    img {
        position: relative;
    }
`

export const Attributes = styled.div `
    display: flex;
`

export const ChaptersContainer = styled.div `
    margin-left: 40px;

    p {
        font-family: 'Roboto';
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
    }
`

export const IconStarContainer = styled.div `
    img {
        position: relative;
        margin-top: 15px;
        margin-left: 20px;
    }
`
export const EvaluationContainer = styled.div `
    p {
        font-family: 'Roboto';
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        margin-left: 5px;
    }
`

export const Sinopse = styled.div `
    margin-left: 40px;

    h2 {
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 20px;
    }

    p {
        font-family: 'Roboto';
        text-align: justify;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }
`