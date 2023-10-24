import React, { useState } from 'react'

const Semaforo = () => {
    const [color, setColor] = useState();
  
    const eventoColor = (luz) => {
      setColor(luz);
    };
  
    return (
      <>
        <div className="container">
          <div className="palosemaforo"></div>
          <div className="semaforo">
            <div
              className={`luz red ${color === 'red' ? 'selected' : ''}`}
              onClick={() => eventoColor('red')}></div>
            <div
              className={`luz yellow ${color === 'yellow' ? 'selected' : ''}`}
              onClick={() => eventoColor('yellow')}></div>
            <div
              className={`luz green ${color === 'green' ? 'selected' : ''}`}
              onClick={() => eventoColor('green')}></div>
          </div>
        </div>
      </>
    );
  };
  
  export default Semaforo;