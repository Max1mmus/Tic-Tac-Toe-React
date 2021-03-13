import React from 'react';

export function NewGame (props) {
    return (
        <div className="buttonContainer">
            <button className="newGame" onClick={props.onClick}>
                New Game
            </button>
        </div>
    );
}