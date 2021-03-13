import React from 'react';
import {Board} from './board';
import {NewGame} from './newgame';

const winLog = (squares) => {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winCombos.length; i++) {
        const [a, b, c] = winCombos[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const checkDraw = (squares) => {
    let moves = 0;
    squares.forEach(square => {
        if (square != null) {
            moves++
        }  
    });

    if (moves === 9) {
        return true
    }
    return false;
}

const initialState = {
    squares : Array(9).fill(null),
    playerX : true,
}

export class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
        this.resetGame = this.resetGame.bind(this);
    }

    handleClick (i) {
        const squares = this.state.squares.slice();
        if (squares[i] || winLog(squares)) {
            return;
        }
        squares[i] = this.state.playerX ? "X" : "O";
        this.setState({
            squares: squares,
            playerX: !this.state.playerX,
        });
    }

    resetGame () {
        this.setState(initialState);
    }

    render () {
        let status;
        const winner =  winLog(this.state.squares);

        if (winner && !checkDraw(this.state.squares)) {
            status = `Winner is: ${winner}`;
        } else if (!winner && !checkDraw(this.state.squares)){
            status = `Next player : ${this.state.playerX ? "X" : "O"}`;
        } else {
            status = "It's a draw!";
        }
        return (
            <>
                <div className="game">
                    <div className="player">{status}</div>
                    <Board
                        squares={this.state.squares}
                        onClick={i => this.handleClick(i)}
                    />
                    <NewGame onClick={this.resetGame} />
                </div>
                <footer>
                    Built with <span id="heart"> ❤ </span> 
                    By: <a id="Max1mmus" href="https://github.com/Max1mmus">Max1mmus</a>
                </footer>
            </>
        );
    }
}