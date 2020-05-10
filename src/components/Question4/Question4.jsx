import React, { Component } from 'react';
//import axios from 'axios';


class Question4 extends Component {
  state = {
    comments: ''
  } // end state

  componentDidMount = () => {
  } // end CDM

  handleChange4 = (event) => {
    //console.log('comments', event.target.value)
    this.setState({ comments: event.target.value })
  } // end HC4

  handleClick4 = () => {
    //console.log('done been CLICKED');
    this.props.dispatch({ 
      type: 'comments', payload: this.state
    });
    this.props.history.push('/ReviewForm');
  } // end HC4
  
  render() {
    //console.log(this.state.comments);
    return (
      <div>
        <h3>Question 4</h3>
        <h1>Any comments you want to leave?</h1>
        <p>(Be nice!  <span role="img" aria-label="cowboy">🤠</span>)</p><br />
        <input type="text" placeholder="you're a poet.............do ya know it?" 
        id="Q4" onChange={this.handleChange4} />
        <br /><button id="submit" onClick={this.handleClick4}>Submit</button>
      </div>
    );
  } // end render
} // end component

export default Question4;