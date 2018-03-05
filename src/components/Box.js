import React, { Component } from 'react';
import './css/box.css';


const randomColor = () => {
  let values = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomSaludo = () => {
  let saludos = ['letter1', 'letter2', 'letter3', 'letter4', 'letter5', 'letter6'];
  return saludos[Math.floor(Math.random() * 6)];;
}

const colorRandom = {backgroundColor: randomColor()};
const typoLetter = randomSaludo();

class Box extends Component {

  render() {
    return (
     
      <div className="bg-box" style={colorRandom}>
        <div className="flex p-5">
          <h1 className={typoLetter}>Bienvenido al Mundo de React</h1>
        </div>
      </div>
     
    );
  }
}

export default Box;