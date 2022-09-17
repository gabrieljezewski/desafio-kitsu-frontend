import { BrowserRouter as Router } from 'react-router-dom'
import Menu from './components/menu/index'
import Content from './components/content/index'

const App = () => (
  <>
    <Router>
      <Menu />
      <Content />
    </Router>
  </>
)

export default App