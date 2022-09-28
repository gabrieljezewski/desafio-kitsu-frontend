import imgLogo from '../../assets/iconLogo.svg'
import iconSearch from '../../assets/iconSearch.svg'
import iconHeart from '../../assets/iconFavorites.svg'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Menu = () => (
    <S.Header>
        <S.Logo>
            <img src={imgLogo} alt="Logo Firedev" />
        </S.Logo>
        <S.Menu>
            <ul>
                <li>
                    <Link to="/anime">ANIME</Link>
                </li>
                <li>
                    <Link to="/manga">MANGA</Link>
                </li>
            </ul>
        </S.Menu>
        <S.SearchContainer>
            <input type="text" />
            <Link to="/">
                <img src={iconSearch} alt="Search" />
            </Link>
        </S.SearchContainer>
        <S.IconHeart>
            <Link to="/">
                <img src={iconHeart} alt="Favorites" />
            </Link>
        </S.IconHeart>
    </S.Header>
)

export default Menu