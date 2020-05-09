import React, { Component } from 'react';
//import axios from 'axios';


class ReviewForm extends Component {
  state = {
    smackTalk: ''
  }

  componentDidMount = () => {
    console.log('Q4');
  } // end CDM

  handleChangeR = (event) => {
    console.log('smackTalk', event.target.value)
    this.setState({ smackTalk: event.target.value })
  } // end HC4

  handleClickR = () => {
    if(this.state.smackTalk === '' || this.state.smackTalk > 5){
      alert(`Dude, you have the memory of a goldfish. Pick between 1-5!`);
      return;
    }
    else {this.props.dispatch({ type: 'smackTalk', payload: this.state});
    this.props.history.push('/ReviewForm');
    }
  } // end HC3
  
  render() {
    console.log(this.state.smackTalk);
    return (
      <div>
          <h1>Thank you for your feedback!</h1>
          <p>Your responses are:</p>
        
        
        
        <br /><button id="submit" onClick={this.handleClick4}>Send</button>
      </div>
    );
  }
}

export default ReviewForm;