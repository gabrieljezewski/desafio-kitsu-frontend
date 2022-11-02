import styled from 'styled-components'

export const CardAnime = styled.div `
    margin-right: 50px;
    margin-bottom: 90px;
    cursor: pointer;

    img {
        height: 299px;
        width: 185px;
        border-radius: 5px;
    }

    h2 {
        font-family: 'DM Sans';
        font-size: 16px;
        text-align: center;
        max-width: 185px;
        color: #fff;
    }

    @media (max-width: 864px) {
        padding: 0px;
        margin: 0px;
        margin-top: 28px;

        img {
            margin-right: 11px;
            width: 113px;
            height: 170px;
            border-radius: 10px;
        }

        h2 {
            font-size: 12px;
            max-width: 113px;
        }
    }
`