import React from 'react';
import {Square} from './square';

export class Board extends React.Component {
    generateBoard (rows, cols) {
        const board = [];
        let counter = 0;

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row.push(this.renderSquare(counter++));
            }
            board.push(<div className="board-row">{row}</div>);
        }
        return board;
    }

    renderSquare (i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render () {
        return (
            <div className="board">
                {this.generateBoard(3, 3)}
            </div>
        );
    }
}