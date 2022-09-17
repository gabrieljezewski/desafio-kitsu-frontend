import imgLogo from '../../assets/iconLogo.svg'
import iconSearch from '../../assets/iconSearch.svg'
import iconHeart from '../../assets/iconFavorites.svg'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Menu = () => (
    <S.HeaderStyled>
        <S.LogoStyled>
            <img src={imgLogo} alt="Logo Firedev" />
        </S.LogoStyled>
        <S.MenuStyled>
            <ul>
                <li>
                    <Link to="/anime">ANIME</Link>
                </li>
                <li>
                    <Link to="/manga">MANGA</Link>
                </li>
            </ul>
        </S.MenuStyled>
        <S.SearchContainerStyled>
            <input type="text" />
            <Link to="/">
                <img src={iconSearch} alt="Search" />
            </Link>
        </S.SearchContainerStyled>
        <S.IconHeartStyled>
            <Link to="/">
                <img src={iconHeart} alt="Favorites" />
            </Link>
        </S.IconHeartStyled>
    </S.HeaderStyled>
)

export default Menu