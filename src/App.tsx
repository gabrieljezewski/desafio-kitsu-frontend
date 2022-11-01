import { Routes, Route } from 'react-router-dom'
import Menu from './components/menu/index'
import Anime from './pages/Anime'
import Manga from './pages/Manga'

import { useState } from 'react'
import * as S from './globalStyle'

const App = () => {
  const [input, setInput] = useState('')

  return (
    <>
      <Menu input={input} setInput={setInput} />
      <S.Main>
        <Routes>
          <Route path="/" element={<Anime input={input} />} />
          <Route path="/anime" element={<Anime input={input} />} />
          <Route path="/manga" element={<Manga input={input} />} />
        </Routes>
      </S.Main>
  </>
  )
}

export default App