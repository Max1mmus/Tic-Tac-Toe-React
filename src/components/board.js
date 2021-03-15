import React from "react";
import {Square} from "./square";

export const Board = ({squares, onClick}) => {
    const generateBoard = (rows, cols) => {
        const board = [];
        let counter = 0;

        for (let i = 0; i < rows; i++) {
            const row = [];

            for (let j = 0; j < cols; j++) {
                row.push(renderSquare(counter++));
            }
            board.push(<div key={`row-${i}`} className="board-row">{row}</div>);
        }
        return board;
    };

    function renderSquare (i) {
        return (
            <Square
                key={i}
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    }

    return (
        <div className="board">
            {generateBoard(3, 3)}
        </div>
    );
};