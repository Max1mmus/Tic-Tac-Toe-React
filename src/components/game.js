import React, {useState} from "react";
import {Board} from "./board";
import {NewGame} from "./newgame";

function winLog (squares) {
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
}

function checkDraw (squares) {
    for (const square of squares) {
        if (square === null) return false;
    }
    return true;
}

export const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [playerX, setCurrentPlayer] = useState(true);

    function handleClick (i) {
        const squaresCopy = squares;

        if (squaresCopy[i] || winLog(squaresCopy)) return;
        squaresCopy[i] = playerX ? "X" : "O";

        setSquares(squaresCopy);
        setCurrentPlayer(!playerX);
    }

    function resetGame () {
        setSquares(Array(9).fill(null));
        setCurrentPlayer(true);
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
                    squares={squares}
                    onClick={(i) => handleClick(i)}
                />
                <NewGame onClick={resetGame} />
            </div>
            <footer>
                Built with <span id="heart"> ❤ </span>
                By:
                <a
                    id="Max1mmus"
                    href="https://github.com/Max1mmus"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Max1mmus
                </a>
            </footer>
        </>
    );
};