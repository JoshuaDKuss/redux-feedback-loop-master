import React, { Component } from 'react';
//import axios from 'axios'
//import Question1 from '../Question1/Question1';

class BodyStart extends Component {


  componentDidMount() {
    //this.getFeedback();
    console.log('BodyStart mounted');
  }

  handleClickStart =() => {
      console.log('done been CLICKED');
      this.props.history.push('/Question1');
  }


  render() {
    
    return (
      <div className="BodyStart">
          
        <h3>Take your time, be as accurate as possible.</h3>
          
        <button id="start" onClick={this.handleClickStart}>Click To Start!</button>

        {/* <button id="start" onClick={ this.handleClickStart }link to="/Question1">Click To Start!</button> */}
          
        </div>
    )
  };//end render
};//end return


export default BodyStart;