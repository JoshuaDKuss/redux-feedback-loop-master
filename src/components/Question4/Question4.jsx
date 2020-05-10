import React, { Component } from 'react';
//import axios from 'axios';


class Question4 extends Component {
  state = {
    smackTalk: ''
  }

  componentDidMount = () => {
    //console.log('Q4');
  } // end CDM

  handleChange4 = (event) => {
    console.log('smackTalk', event.target.value)
    this.setState({ smackTalk: event.target.value })
  } // end HC4

  handleClick4 = () => {
    console.log('done been CLICKED');
    this.props.dispatch({ type: 'smackTalk', payload: this.state});
    this.props.history.push('/ReviewForm');
  } // end HC4
  
  render() {
    console.log(this.state.smackTalk);
    return (
      <div>
        <h3>Question 4</h3>
        <h1>Any comments you want to leave?</h1>
        <p>(Be nice!  <span role="img" aria-label="cowboy">🤠</span>)</p><br />
        <input type="text" placeholder="you're a poet.........................
        .................... do ya know it?" id="Q4" onChange={this.handleChange4} />
        <br /><button id="submit" onClick={this.handleClick4}>Submit</button>
      </div>
    );
  }
}

export default Question4;