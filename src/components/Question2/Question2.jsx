import React, { Component } from 'react';
//import axios from 'axios';

class Question2 extends Component {
  state = {
    understandz: ''
  }

  componentDidMount = () => {
    console.log('Q2');
  } // end CDM

  handleChange2 = (event) => {
    console.log('understandz', event.target.value)
    this.setState({ understandz: event.target.value })
  } // end HC2

  handleClick2 = () => {
    if(this.state.understandz === '' || this.state.understandz > 5){
      alert(`Dude, pick a number between 1-5, it's not rocket science`);
      return;
    }
    else {this.props.dispatch({ type: 'understandz', payload: this.state});
    this.props.history.push('/Question3');
    }
  } // end HC2


  render() {
    console.log(this.state.understandz);
    return (
      <div>
        <h3>Question 2</h3>
        <h1>How well are you understanding the content?</h1>
        <p>(On a scale of 1 - 5)</p><br />
        <input type="number" placeholder="1 = bad, 5 = great" id="Q2" onChange={this.handleChange2} />
        <button id="submit" onClick={this.handleClick2}>Submit</button>
      </div>
    );
  }
}

export default Question2;