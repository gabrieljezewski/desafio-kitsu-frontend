import styled from 'styled-components'

export const BackgroundModal = styled.div `
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(14, 13, 13, 0.47);
`

export const ModalContainer = styled.div `
    display: flex;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3%;
    width: 890px;
    border-radius: 8px;
    background-color: #F3F2F2;
`

export const ImageContainer = styled.div `
    display: flex;
    justify-content: center;

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

    h2 {
        margin: 0;
        padding: 0;
        font-size: 30px;
        font-family: 'Poppins';
        color: #000;
    }

    img {
        cursor: pointer;
        width: 40px;
        height: 40px;
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
    display: flex;
    flex-direction: column;
    max-height: 240px;
    margin-left: 40px;
    overflow: hidden;

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