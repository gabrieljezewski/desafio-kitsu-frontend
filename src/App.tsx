import { Routes, Route } from 'react-router-dom'
import Menu from './components/menu/index'
import Anime from './pages/Anime'
import Manga from './pages/Manga'

import * as S from './globalStyle'

const App = () => (
  <>
    <Menu />
    <S.Main>
      <Routes>
        <Route path="/anime" element={<Anime />} />
        <Route path="/manga" element={<Manga />} />
      </Routes>
    </S.Main>
  </>
)

export default App