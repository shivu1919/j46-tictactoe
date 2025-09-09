import { useRef } from 'react'
import './App.css'
import { useState } from 'react'
import JSConfetti from 'js-confetti'

function App() {

    const jsConfetti = new JSConfetti()
    const[player, setPlayer] = useState("O")
    const [game, setGame] = useState(true)
    const[count, setCount] = useState(0)
    

    const cell0 = useRef(null)
    const cell1 = useRef(null)
    const cell2 = useRef(null)
    const cell3 = useRef(null)
    const cell4 = useRef(null)
    const cell5 = useRef(null)
    const cell6 = useRef(null)
    const cell7 = useRef(null)
    const cell8 = useRef(null)
    
    const result = useRef(null)

    function restart() {
        window.location = "/"  //This is the code to refresh the website
    }

    function playerClick(rfc) {

        if (game) {
            if (player == "O") {
                if(rfc.current.innerHTML==''){
                    rfc.current.innerHTML = "O"
                    setCount(count+1)
                    checkWinner()
                    
                    setPlayer("X")
                    
                }
                else{
                    alert("Double click is not allowed")
                }
                
            }
            else {
                if(rfc.current.innerHTML==''){
                    rfc.current.innerHTML = "X"
                   setCount(count+1)
                    checkWinner()
                    
                    setPlayer("O")
                    
                }
                else{
                    alert("Double click is not allowed")
                }
            }
        }
        else{
            alert("Please restart the game")
        }
        
    }

    function checkWinner() {
        let c = []
        for (let i = 0; i < 9; i++) {
            let data = document.getElementsByClassName('cell')
            c[i] = data[i].innerHTML
        }

        if (player == c[0] && player == c[1] && player == c[2]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if (player == c[3] && player == c[4] && player == c[5]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if (player == c[6] && player == c[7] && player == c[8]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if (player == c[0] && player == c[3] && player == c[6]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if (player == c[1] && player == c[4] && player == c[7]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if (player == c[2] && player == c[5] && player == c[8]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if (player == c[0] && player == c[4] && player == c[8]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if (player == c[2] && player == c[4] && player == c[6]) {
           result.current.innerHTML = player +" is the winner"
            setGame(false)
            jsConfetti.addConfetti()
        }
        else if(count==8){
            result.current.innerHTML = "Game Drawn"
            setGame(false)
        }
    }



    return (
        <>
            <div id="main">
                <h1>Tic Tac Toe</h1>

                <div id="game">
                    <div ref={cell0} className="cell" onClick={() => playerClick(cell0)}></div>
                    <div ref={cell1} className="cell" onClick={() => playerClick(cell1)}></div>
                    <div ref={cell2} className="cell" onClick={() => playerClick(cell2)}></div>
                    <div ref={cell3} className="cell" onClick={() => playerClick(cell3)}></div>
                    <div ref={cell4} className="cell" onClick={() => playerClick(cell4)}></div>
                    <div ref={cell5} className="cell" onClick={() => playerClick(cell5)}></div>
                    <div ref={cell6} className="cell" onClick={() => playerClick(cell6)}></div>
                    <div ref={cell7} className="cell" onClick={() => playerClick(cell7)}></div>
                    <div ref={cell8} className="cell" onClick={() => playerClick(cell8)}></div>
                </div>
                
                
                <h2 ref={result}></h2>
                <button onClick={restart}>Restart</button>
            </div>
        </>
    )
}

export default App;


