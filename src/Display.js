import React from 'react';
import './index.css';

export default class Display extends React.Component {
  render(){
    return (<div>
      <div id="display"> { this.props.currentValue } </div>
      <div id="formula"> { this.props.formula } </div>
        </div>
        
    );
  }
}