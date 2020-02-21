import React, { useState } from 'react';
import './GameButton.css'

function GameButton(props) {

    function renderMenuItems() {

    }

    return (
        <div class="btn-group">
            <button type="button" class="btn btn-secondary newgame">NEW GAME 3Х3</button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split newgame" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
            </button>
        <div class="dropdown-menu">
          <a class="dropdown-item">NEW GAME 3X3</a>
          <a class="dropdown-item">NEW GAME 4X4</a>
          <a class="dropdown-item">NEW GAME 5X5</a>
          {/* <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a> */}
        </div>
      </div>
    );
}

export default GameButton;