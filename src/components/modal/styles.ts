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

    @media (max-width: 930px) {
        width: 350px;
        height: 230px;
    }
`

export const ImageContainer = styled.div `
    display: flex;
    justify-content: center;

    img {
        width: 317px;
        height: 420px;
        border-radius: 4px;
     }

     @media (max-width: 930px) {
        img {
            width: 170px;
            height: 208px;
        }
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

    @media (max-width: 930px) {
        justify-content: space-between;
        margin: 0px;

        h2 {
            font-size: 12px;
            margin-left: 10px;
        }

        img {
            width: 20px;
            height: 15px;
        }
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

    @media (max-width: 930px) {
        margin: 0px;
        
        p {
            margin-left: 10px;
            font-size: 8px;
        }
    }
`

export const IconStarContainer = styled.div `
    img {
        position: relative;
        margin-top: 15px;
        margin-left: 20px;
    }

    @media (max-width: 930px) {
        img {
            width: 20px;
            height: 15px;
            margin-left: 0px;
            margin-top: 4px;
        }
    }
`
export const EvaluationContainer = styled.div `
    p {
        font-family: 'Roboto';
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        margin-left: 0px;
    }

    @media (max-width: 930px) {
        p {
            font-size: 8px;
        }
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

    @media (max-width: 930px) {
        margin: 0px;

        h2 {
            font-size: 12px;
            margin-left: 10px;
        }

        p {
            font-size: 8px;
            margin-left: 10px;
            margin-top: 0px;
        }
    }
`