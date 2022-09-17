import styled from 'styled-components'

export const HeaderStyled = styled.header `
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 68px;
    background: linear-gradient(180deg, #081C42 0%, rgba(15, 105, 170, 0.62) 100%);
`

export const LogoStyled = styled.div `
    padding: 15px;
    margin-left: 65px;
`

export const MenuStyled = styled.nav `
    flex-grow: 10;

    ul {
        display: flex;
        list-style: none;
    }

    ul li {
        display: inline-block;
        margin-top: 10px;
        margin-right: 50px;
    }

    a {
        font-family: poppins;
        font-size: 16px;
        color: #fff;
        text-decoration: none;
    }
`

export const SearchContainerStyled = styled.div `
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
`

export const IconHeartStyled = styled.div `
    margin-right: 77px;
`