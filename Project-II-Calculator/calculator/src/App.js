import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

var white = {
  color:'#222',
  backgroundColor:'#ddd',
  border:'1px outset #333'
}

var red = {
  color:'#ddd',
  backgroundColor:'#f00',
  border:'1px outset #aaa'
}

var grey = {
  color:'#ddd',
  backgroundColor:'#333',
  width:'192px'
}

var numbersWidth = {
  width:'144px',
  display: 'inline-block'
}

var actionsWidth = {
  width:'48px',
  display: 'inline-block'
}

const App = () => {
  return (
    <div>
            <div id="display-screen">
              <CalculatorDisplay  style={grey}/>
            </div>
            <div id="buttons">
                <div id="numbers" style={numbersWidth}>
                    <ActionButton symbol="0" style={white}  />
                    <NumberButton symbol="9" style={white} />
                    <NumberButton symbol="8" style={white} />
                    <NumberButton symbol="7" style={white} />
                    <NumberButton symbol="6" style={white} />
                    <NumberButton symbol="5" style={white} />
                    <NumberButton symbol="4" style={white} />
                    <NumberButton symbol="3" style={white} />
                    <NumberButton symbol="2" style={white} />
                    <NumberButton symbol="1" style={white} />
                    <ActionButton symbol="Clear"  style={white} />
                </div>
                <div id="actions" style={actionsWidth}>
                    <NumberButton symbol="+" style={red} />
                    <NumberButton symbol="-" style={red} />
                    <NumberButton symbol="x" style={red} />
                    <NumberButton symbol="/" style={red} />
                    <NumberButton symbol="=" style={red} />
                </div>
            </div>
        </div>
  );
};

export default App;
