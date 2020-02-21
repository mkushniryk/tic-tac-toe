import React, { useState } from 'react';
import Board from '../Board/Board';
import GameButton from '../GameButton/GameButton';
import "./Game.css";

function Game(props) {

    const [history, setHistory] = useState([{
        square: Array(9).fill(null)
    }]);
    const [historyState, setHistoryState] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    

    function next() {
        return xIsNext;
    }

    function isOver() {
        return isGameOver;
    }

    function handleClick(i) {
        const hist = history.slice(0, historyState + 1);
        const current = hist[hist.length - 1];
        const square = current.square.slice();

        // var win = calculateWinner(squares);
        // if (win) {
        //     console.log('WINNER SUKA ' + win);
        //     this.setState({
        //         isEnd: true
        //     });
        // }

        // if (this.state.isEnd || squares[i]) {
        //     return;
        // }
        square[i] = xIsNext ? 'X' : 'O';
        setHistory(hist.concat({
            square: square
        }));
        setHistoryState(hist.length);
        setXIsNext(!xIsNext);

        var win = calculateWinner(square);
        if (win) {
            setIsGameOver(true);
        }

        if (isGameOver || square[i]) {
            return;
        }
    }

    function getStatus() {
        console.log('HISTORY')
        console.log(history);
        console.log(history[0]);
        const winner = calculateWinner(history[historyState].square);
        return winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className='container'>
            <div className='header'>
                <h1 className='title'>TIC TAC TOE</h1>
            </div>
            <div>{getStatus()}</div>
            <Board
                square={history[historyState].square}
                next={() => next()}
                onClick={(i) => handleClick(i)}
                isEnd={() => isOver()}
            />
            <div>{getStatus()}</div>
            <div class="endgame">
                <span class="msg msg--o-win">You lost to a stylesheet!</span>
                <span class="msg msg--draw">Draw!</span>
                <button class="endgame-newgame" type="reset">Try again</button>
            </div>
    
            <div class="bar">
                <GameButton/>
            </div>
        </div>
    );
}

function calculateWinner(square) {

    const lines = buildWinPositions(square)

    for (let i = 0; i < lines.length; i++) {
        const positions = lines[i];
        var res = true;
        positions.forEach(cell => {
            res = res && (square[cell] === square[0]);
        });
        if (square[0] && res) return square[0];
    }

    return null;
}

function buildWinPositions(square) {
    const lineLen = Math.sqrt(square.length);
    const lines = [];
    
    for (let i = 0; i < square.length; i += lineLen) {
        var arr = [];
        for (let j = i; j < i + lineLen; j++) {
            arr.push(j);
        }
        lines.push(arr);
    }

    for (let i = 0; i < lineLen; i++) {
        var arr = [];
        for (let j = i; j < square.length; j += lineLen) {
            arr.push(j);
        }
        lines.push(arr);
    }

    var arr = [];
    for (let i = 0; i < square.length; i += lineLen + 1) {
        arr.push(i);
    }
    lines.push(arr);

    arr = [];
    for (let i = lineLen - 1; i < square.length; i += lineLen - 1) {
        arr.push(i);
        if (arr.length == lineLen) {
            break;
        }
    }
    lines.push(arr);

    return lines;
}

export default Game;