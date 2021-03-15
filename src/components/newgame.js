import React from "react";

export function NewGame ({onClick}) {
    return (
        <div className="buttonContainer">
            <button className="newGame" onClick={onClick}>
                New Game
            </button>
        </div>
    );
}