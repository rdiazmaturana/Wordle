import './App.css'
import Row from './components/Row';
import { Slide } from '@mui/material';
import { gameStore } from './store/game';
import { useState } from 'react';
import HowToPlay from './components/HowToPlay';

function App() {
  const N = 6;
  const ids: number[] = Array.from({ length: N }, (_, i) => i + 1);
  const { message } = gameStore();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
    {isOpen ? 
    <>
      <HowToPlay onClick={() => setIsOpen(false)}/>
    </> : <>
      {message &&
      <Slide in={!!message} timeout={1000}>
        <div className='message'>{message}</div>
      </Slide>
      }
      <h1>Wordle</h1>
      {ids.map((n, i) => {
        return <Row key={i} id={n}/>
      })}
    </>}
    </>
  )
}

export default App
