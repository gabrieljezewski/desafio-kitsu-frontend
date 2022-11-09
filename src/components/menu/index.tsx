import imgLogo from '../../assets/iconLogo.svg'
import iconSearch from '../../assets/iconSearch.svg'
import iconHeart from '../../assets/iconFavorites.svg'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Menu = ({input, setInput}: any) => {

    return (
        <S.Header>
                <S.Logo>
                    <Link to="/anime">
                        <img src={imgLogo} alt="Logo Firedev" />
                    </Link>
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
                    <input 
                        type="text" 
                        onChange={e => setInput(e.target.value)}
                        value={input}
                    />
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
}

export default Menu