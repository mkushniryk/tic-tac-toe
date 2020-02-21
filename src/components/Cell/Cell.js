import React, { useState } from "react";
import "./Cell.css";

function Cell(props) {

  const [isClicked, setIsClicked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [mark, setMark] = useState(null);

  function handleClick(number) {
    if (props.isEnd() || isClicked) return;

    setIsClicked(!isClicked);
    setIsHover(false);
    setMark(props.next() ? 'x' : 'o');

    props.onClick(number);
  }

    function handleHover(hover){
      if (props.isEnd() || isClicked) return;

      setIsHover(hover);
      setMark(props.next() ? 'x' : 'o');
    }

    function renderMark() {
        return (
            <div className={'mark mark-' + (mark) + (isClicked ? ' mark-clicked' : isHover ? ' mark-hover' : '')}/>
        );
    }

    return (
      <div
        className={'cell' + (' ' + props.classes.join(' '))}
        onClick={() => handleClick(props.number)}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {renderMark()}
      </div>
    );
}

export default Cell;
