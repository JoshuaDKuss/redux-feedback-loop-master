import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';


class ReviewForm extends Component {
  
  componentDidMount = () => {
    console.log('RF');
  } // end CDM


  handleClickR = () => {
    this.props.history.push('/Awesome');
  } // end HC3
  
  render() {
    
    return (
      <div>
          <h1>Thank you for your feedback!</h1>
          <p>Your responses are:</p>
          <p>Feelings: <span>{this.props.reduxState.feelz}</span></p>
          <p>Understanding: <span>{this.props.reduxState.understandz}</span></p>
          <p>Support: <span>{this.props.reduxState.supportz}</span></p>
          <p>Comments: <span>{this.props.reduxState.smackTalk}</span></p>
        
        
        
        <br /><button id="submit" onClick={this.handleClickR}>Send</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(ReviewForm);
//export default ReviewForm;