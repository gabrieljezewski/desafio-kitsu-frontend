import styled from 'styled-components'

export const Header = styled.header `
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 68px;
    background: linear-gradient(180deg, #081C42 0%, rgba(15, 105, 170, 0.62) 100%);

    @media (max-width: 864px) {
        height: 50px;
    }
`

export const Logo = styled.div `
    padding: 15px;
    margin-left: 65px;

    @media (max-width: 864px) {
        padding-left: 2px;
        margin-left: 0px;

        img {
            width: 63px;
            height: 14px;
            margin-top: 8px;
        }
        
    }
`

export const Menu = styled.nav `
    flex-grow: 10;

    ul {
        display: flex;
        list-style: none;
    }

    ul li {
        display: inline-block;
        margin-top: 10px;
        margin-right: 70px;
        margin-top: 5px;
    }

    a {
        font-family: poppins;
        font-size: 16px;
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 864px) {
        ul {
            padding: 0px;
        }

        ul li {
            margin-right: 20px;
        }

        a {
            font-size: 10px;
        }
    }
`

export const SearchContainer = styled.div `
    margin-right: 110px;

    input {
        position: absolute;
        width: 241px;
        height: 39px;
        background: rgba(255, 255, 255, 0.02);
        color: #fff;
        border: 1px;
        border-radius: 5px;
        outline: none;
    }

    input:hover {
        border: 1px solid #fff;
    }

    a {
        margin-left: 200px;
    }

    img {
        padding-top: 6px;
    }

    @media (max-width: 864px) {
        margin-right: 10px;

        input {
            margin-top: 6px;
            margin-left: 67px;
            width: 102px;
            height: 16px;
        }

        a {
            margin-left: 155px;
        }

        img {
            width: 10px;
            height: 10px;
            padding-top: 10px;
        }
    }
`

export const IconHeart = styled.div `
    margin-right: 77px;

    @media (max-width: 864px) {
        padding: 5px;
        margin: 0px;
        margin-top: 5px;

        img {
            width: 12px;
            height: 10px;
            margin: 0px;
        }
    }
`