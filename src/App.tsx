import './App.css'
import Row from './components/Row'
import { store } from './store'

function App() {

  console.log(store().selected);

  return (
    <>
      <Row />
    </>
  )
}

export default App
