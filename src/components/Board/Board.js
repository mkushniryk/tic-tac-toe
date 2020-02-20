import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import "./Board.css";

function Board(props) {

    function renderCell(number, classes) {
        return (<Cell
                classes = {classes}
                value = {props.square[number]}
                number = {number}
                next = {() => props.next()}
                onClick = {() => props.onClick()}
            />);
    }

    function renderCells() {
        var len = Math.sqrt(props.square.length);
        const squares = [];
        for (let i = 0; i < props.square.length; i++)
            squares.push(renderCell(i, generateClasses(i + 1, len)));
        return squares;
    }

    function generateClasses(position, length) {
        var classes = [];
        var pos = (position) % length;
        if (pos === 1) classes.push('cell-left');
        if (pos === 0) classes.push('cell-right');
        if (position <= length) classes.push('cell-top');
        if (position > (length * (length - 1))) classes.push('cell-bottom');
        return classes;
    }

    const gridStyle = {
        gridTemplate: 'repeat(' + Math.sqrt(props.square.length) + ', min-content) / repeat(' + Math.sqrt(props.square.length) + ', min-content)'
    };

    return (
        <div className="board" style={gridStyle}>
            {renderCells()}
        </div>
    );
}

export default Board;