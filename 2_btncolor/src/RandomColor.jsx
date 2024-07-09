import React, { useState } from 'react'


const RandomColor = () => {
    let [color, setColor] = useState("#938652")

  return (
    <div className='container'>
        <div className='box' style={{backgroundColor: color}}>
            <h2>Click buttons to change colour</h2>
        </div>
        <div className='btn'>
            <button onClick={() => setColor("#FF204E")} className='red'>Red</button>
            <button onClick={() => setColor("darkcyan")} className='blue'>Blue</button>
            <button onClick={() => setColor("green")} className='green'>Green</button>
        </div>
    </div>
  )
}

export default RandomColor
