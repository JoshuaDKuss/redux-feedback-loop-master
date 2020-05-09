import React, { Component } from 'react';
//import axios from 'axios';


class Question1 extends Component {
  state = {
    feelz: ''
  }

  componentDidMount = () => {
    console.log('Q1');
  } // end CDM

  handleChange1 = (event) => {
    console.log('feeling', event.target.value)
    this.setState({ feelz: event.target.value })
  } // end HC1

  handleClick1 = () => {
    if(this.state.feelz === '' || this.state.feelz > 5){
      alert(`Dude, a number between 1-5, it's not that hard`);
      return;
    }
    else {this.props.dispatch({ type: 'feelz', payload: this.state});
    this.props.history.push('/Question2');
    }
  } // end HC1

  render() {
    console.log(this.state.feelz);
    return (
      <div>
        <h3>Question 1</h3>
        <h2>How are you feeling today?</h2> 
        <p>(On a scale of 1 - 5)</p>
        <input type="number" placeholder="1 = bad, 5 = great" id="Q1" onChange={this.handleChange1} />
        <button onClick={this.handleClick1}>Submit</button>
      </div>
    );
  }
}

export default Question1;