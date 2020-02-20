import React, { Component } from 'react';
import Board from '../Board/Board';
import "./Game.css";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            historyState: 0
        }
    }

    next() {
        return this.state.xIsNext;
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.historyState + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            historyState: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.historyState];


        return (
            <div className='container'>
                <h1 class="title">TIC TAC TOE</h1>
                <Board
                    square={current.squares}
                    next={() => this.next()}
                    onClick={(i) => this.handleClick(i)}
                />
                <div class="endgame">
                    <span class="msg msg--o-win">You lost to a stylesheet!</span>
                    <span class="msg msg--draw">Draw!</span>
                    <button class="endgame-newgame" type="reset">Try again</button>
                </div>
    
                <div class="bar">
                    <button class="newgame" type="reset">New game</button>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Game;