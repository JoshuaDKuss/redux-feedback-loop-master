import React, { Component } from 'react';
//import axios from 'axios';


class Question1 extends Component {
  state = {
    feeling: ''
  }

  componentDidMount = () => {
    //console.log('Q1');
  } // end CDM

  handleChange1 = (event) => {
    console.log('feeling', event.target.value)
    this.setState({ 
      feeling: event.target.value 
    })
  } // end HC1

  handleClick1 = () => {
    if(this.state.feeling === '' || this.state.feeling > 5){
      alert(`Dude, a number between 1-5, it's not that hard`);
      return;
    }
    else {this.props.dispatch({ 
      type: 'Feeling', payload: this.state
    });
    this.props.history.push('/Question2');
    }
  } // end HC1

  render() {
    console.log(this.state.feeling);
    return (
      <div>
        <h3>Question 1</h3>
        <h1>How are you feeling today?</h1> 
        <p>(On a scale of 1 - 5)</p><br />
        <input type="number" placeholder="1 = bad, 5 = great" id="Q1" onChange={this.handleChange1} />
        <br /><button id="submit" onClick={this.handleClick1}>Submit</button>
      </div>
    );
  }
}

export default Question1;