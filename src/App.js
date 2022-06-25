import { useState } from 'react';
import './App.css';
import { DiagonalLine } from './components/DiagonalLine';
import { Draw } from './components/Draw';
import { HorizontalLine } from './components/HorizontalLine';
import { Modal } from './components/Modal';
import { ModalContent } from './components/ModalContent';
import { Squares } from './components/Squares';
import { VerticalLine } from './components/VerticalLine';
import { WinnerWindow } from './components/WinnerWindow';


const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  const [squares, setSquares] = useState(Array(9).fill(''))
  const [winCombination, setWinCombination] = useState([]);
  const [xTurn, setXTurn] = useState(true);

  const [xCountWins, setXCountWins] = useState(0);
  const [oCountWins, setOCountWins] = useState(0);

  const [xWon, setXwon] = useState(false);
  const [oWon, setOwon] = useState(false);

  const [modalActive, setModalActive] = useState(true);
  const [playersName, setPlayersName] = useState({});

  const [isDraw, setIsDraw] = useState(false);
  const [isGameOver, setGameOver] = useState(false);


  
  const handleClick = (index) => {
    if(!isGameOver) {
      if(squares[index] === '') {
        squares[index] = (xTurn) ? 'X'  : 'O';
        setSquares(squares);
        setXTurn(!xTurn);
      }
    }
    else {
      return;
    }
    
  }

  const isGameFinished = () => {
    if(!isGameOver) {
      for (let i = 0; i < 8; i ++) {
        if(
          squares[winCombinations[i][0]] === 'X' &&
          squares[winCombinations[i][1]] === 'X' &&
          squares[winCombinations[i][2]] === 'X'
        ) {
          setXwon(true);
          setGameOver(true);
          setWinCombination(winCombinations[i])
          setXCountWins(xCountWins + 1);
          return;
        }
      }

      for (let i = 0; i < 8; i ++) {
      if(
        squares[winCombinations[i][0]] === 'O' &&
        squares[winCombinations[i][1]] === 'O' &&
        squares[winCombinations[i][2]] === 'O'
      ) {
          setOwon(true);
          setGameOver(true);
          setWinCombination(winCombinations[i])
          setOCountWins(oCountWins + 1);
          return;
        }
      }

      drawDetermine();
 
      if(!squares.includes('')) {
        setIsDraw(true);
        setGameOver(true);
      }    
    }
  }

  const drawDetermine = () => {
    winCombinations.forEach((positions) => {
      let pointsInRow = 0;
      let pointsForWin = false;
      let search;

      for(let i = 0; i < squares.length; i++) {
        if(squares[positions[i]] === 'X') {
          pointsInRow ++
          search = (positions.findIndex(index => squares[index] === ''))
        }
        if(pointsInRow === 2 && squares[positions[search]]  === '') {
          pointsForWin = true;
        }
        else {
          pointsForWin = false;
        }
      }
      if(
        squares.filter(square => square === '').length < 2 ) {
          if(pointsForWin) {
            return;
          }
          if(pointsForWin === false && squares[positions[search]]  === '') {
            setIsDraw(true);
            setGameOver(true);
          }
          
          
        return;
      }
    })
    
  }

  const playAgain = () => {
    setSquares(Array(9).fill(''));
    setWinCombination([]);
    setXTurn(true);
    setIsDraw(false);
    setXwon(false);
    setOwon(false);
    setGameOver(false);
  }

  const startNewGame = () => {
    playAgain();
    setOCountWins(0);
    setXCountWins(0);
    setPlayersName({});
    setModalActive(true);
  } 

  isGameFinished();

  return (
    
    <div className='bg-background w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-5'>
      <div>
        <button className='bg-squareBackground border-2 rounded-xl border-borderColor w-40 text-white' onClick={() => {startNewGame()}}>
          New Game
        </button>
      </div>
      <Modal isDraw={isDraw} active={modalActive} xWon={xWon} oWon={oWon} setActive={setModalActive} setIsDraw={setIsDraw}>
        {modalActive ? <ModalContent active={modalActive} setActive={setModalActive} playersName={playersName} setPlayersName={setPlayersName}/> : null}
        
        {isDraw ? <Draw playAgain={playAgain} /> : null}
        {xWon? <WinnerWindow winner={'X'} playAgain={playAgain}/> : null}
        {oWon? <WinnerWindow winner={'O'} playAgain={playAgain}/> : null}
      </Modal>
      <div className='flex w-800 h-600 border-2'>
        
        <div className='flex flex-wrap w-500 h-600'>
          <HorizontalLine winCombination={winCombination} strokeWidth={10} stroke={'#af3d38'}/>
          <VerticalLine winCombination={winCombination} strokeWidth={10} stroke={'#af3d38'}/>
          <DiagonalLine winCombination={winCombination} strokeWidth={10} stroke={'#af3d38'}/>
          <Squares squares={squares} handleClick={handleClick} isGameOver={isGameOver}/>
          
        </div>
        
        <div className='text-white text-xl'>
          <div>
            Score:
          </div>
          <div>
            Player {playersName.firstName}: {xCountWins}
          </div>
          <div>
            Player {playersName.secondName}: {oCountWins}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
