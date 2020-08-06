import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      decimal: false,
      operator: false
  }
  }
  
handleResult = () => {
	 // eslint-disable-next-line
 this.setState({currentValue: Math.round(1000000000000 * eval(this.state.currentValue)) / 1000000000000})
 }
 
handleNumbers = (e) => {
   if (this.state.currentValue === 0) {
       this.setState({currentValue: e.target.innerHTML})
  }
    else 
     { this.setState({currentValue: this.state.currentValue + e.target.value})}
  
   if (this.state.currentValue === "0"){
      this.setState({currentValue: this.state.currentValue.slice(0, -1)})
    }
  }
  
handleClear = (e) => {
  this.setState({currentValue: 0,
                decimal: false,
                 operator: false
                })
}

handleOperators = (e) => {
 this.setState({currentValue: this.state.currentValue + e.target.innerHTML,
               decimal: false})
}

handleDecimal = (e) => {
  if(!this.state.decimal)  {
    this.setState({currentValue: this.state.currentValue + e.target.innerHTML,
                  decimal: true})
  }
  else 
    {this.setState({currentValue: this.state.currentValue,
                    decimal: true
                   })}
}

  render(){
    return (<div class="calculator">
      <Display currentValue={ this.state.currentValue }
               formula={ this.state.formula }/>
      <Keypad handleNumbers={ this.handleNumbers } 
              handleClear={ this.handleClear }
        handleOperators={ this.handleOperators }
        handleDecimal={ this.handleDecimal }
        handleResult={ this.handleResult }/>
        </div>
    );
  }
}


export default App;
