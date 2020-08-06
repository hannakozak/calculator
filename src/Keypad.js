import React from 'react';
import './index.css';

export default class Keypad extends React.Component {
  render(){
    return (
    <div id="keypad">
        <button id="add" value="add" onClick = { this.props.handleOperators }>+</button>
        <button id="subtract" value="substract" onClick = { this.props.handleOperators }>-</button>
        <button id="multiply" value="multiply" onClick = { this.props.handleOperators }>*</button>
        <button id="divide" value="divide" onClick = { this.props.handleOperators }>/</button>
        <button id="seven" value="7" onClick = { this.props.handleNumbers }>7</button>
        <button id="eight" value="8" onClick = { this.props.handleNumbers }>8</button>
        <button id="nine" value="9" onClick = { this.props.handleNumbers }>9</button>
        <button id="four" value="4" onClick = { this.props.handleNumbers }>4</button>
        <button id="five" value="5" onClick = { this.props.handleNumbers }>5</button>
        <button id="six" value="6" onClick = { this.props.handleNumbers }>6</button>
        <button id="one" value="1" onClick = { this.props.handleNumbers }>1</button>
        <button id="two" value="2" onClick = { this.props.handleNumbers }>2</button>
        <button id="three" value="3" onClick = { this.props.handleNumbers }>3</button>
        <button id="zero" value="0" onClick = { this.props.handleNumbers }>0</button>
        <button id="decimal" value="decimal" onClick = { this.props.handleDecimal }>.</button>
        <button id="clear" value="clear" onClick = { this.props.handleClear}>AC</button>
        <button id="equals" value="="  onClick = { this.props.handleResult }>=</button>
      </div>
    );
  }
}
