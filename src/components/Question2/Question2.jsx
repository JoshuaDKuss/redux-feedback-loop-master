import React, { Component } from 'react';
//import axios from 'axios';

class Question2 extends Component {
  state = {
    understanding: ''
  }

  componentDidMount = () => {
    //console.log('Q2');
  } // end CDM

  handleChange2 = (event) => {
    //console.log('understanding', event.target.value)
    this.setState({ 
      understanding: event.target.value 
    })
  } // end HC2

  handleClick2 = () => {
    if(this.state.understanding === '' || this.state.understanding > 5){
      alert(`Dude, pick a number between 1-5, it's not rocket science`);
      return;
    }
    else {this.props.dispatch({ 
      type: 'understanding', payload: this.state
    });
    this.props.history.push('/Question3');
    }
  } // end HC2


  render() {
    //console.log(this.state.understanding);
    return (
      <div>
        <h3>Question 2</h3>
        <h1>How well do you understand the content?</h1>
        <p>(On a scale of 1 - 5)</p><br />
        <input type="number" placeholder="1 = bad, 5 = great" id="Q2" onChange={this.handleChange2} />
        <br /><button id="submit" onClick={this.handleClick2}>Submit</button>
      </div>
    );
  }
}

export default Question2;