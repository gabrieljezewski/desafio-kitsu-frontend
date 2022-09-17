import * as S from './styles'
import { Routes, Route } from 'react-router-dom'
import Anime from '../../pages/Anime'
import Manga from '../../pages/Manga'

const Content = () => (
    <S.MainStyled>
        <Routes>
            <Route path="/anime" element={<Anime />} />
            <Route path="/manga" element={<Manga/>} />
        </Routes>
    </S.MainStyled>
)

export default Content