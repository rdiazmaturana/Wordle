import './App.css'
import Row from './components/Row';
import { Container, Slide } from '@mui/material';
import { gameStore } from './store/game';
import { useState } from 'react';
import HowToPlay from './components/HowToPlay';

function App() {
  const N = 6;
  const ids: number[] = Array.from({ length: N }, (_, i) => i + 1);
  const { message } = gameStore();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container className='container'>
      <h2 className="header" onClick={() => setIsOpen(true)}>COMO JUGAR</h2>
      <Container className="cells-container">
          <Container className="cell title-element correct">W</Container>
          <Container className="cell title-element correct">O</Container>
          <Container className="cell title-element correct">R</Container>
          <Container className="cell title-element correct">D</Container>
          <Container className="cell title-element correct">L</Container>
          <Container className="cell title-element correct">E</Container>
      </Container>
      {isOpen ? 
      <>
        <HowToPlay onClick={() => setIsOpen(false)}/>
      </> : <>
        {message &&
        <Slide in={!!message} timeout={1000}>
          <div className='message'>{message}</div>
        </Slide>
        }
        <Container className='table'>
          {ids.map((n, i) => {
            return <Row key={i} id={n}/>
          })}
        </Container>
      </>}
    </Container>
  )
}

export default App
