import React, { Component } from 'react';
//import axios from 'axios';


class Question3 extends Component {
  state = {
    support: ''
  }

  componentDidMount = () => {
    //console.log('Q3');
  } // end CDM

  handleChange3 = (event) => {
    console.log('support', event.target.value)
    this.setState({ support: event.target.value })
  } // end HC3

  handleClick3 = () => {
    if(this.state.support === '' || this.state.support > 5){
      alert(`Dude, you have the memory of a goldfish. Pick between 1-5!`);
      return;
    }
    else {this.props.dispatch({ type: 'support', payload: this.state});
    this.props.history.push('/Question4');
    }
  } // end HC3

  render() {
    console.log(this.state.support);
    return (
      <div>
        <h3>Question 3</h3>
        <h1>How well are you being supported?</h1>
        <p>(On a scale of 1 - 5)</p><br />
        <input type="number" placeholder="1 = bad, 5 = great" id="Q3" onChange={this.handleChange3} />
        <br /><button id="submit" onClick={this.handleClick3}>Submit</button>
      </div>
    );
  }
}

export default Question3;