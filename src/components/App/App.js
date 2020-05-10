import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import Header from '../Header/Header';
import BodyStart from '../BodyStart/BodyStart';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Question4 from '../Question4/Question4';
import ReviewForm from '../ReviewForm/ReviewForm';
import Awesome from '../Awesome/Awesome';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';  //, Link

class App extends Component {

  componentDidMount = () => {
    
  }
  // handleClick = () => {
  //   console.log('HC app');
  //   //this.props.dispatch({ type: click });
  // } // end HC

  render() {

    return (
      <div className="App">    
        <Header />
        <HashRouter>
          <Route exact path='/' render={(props) => <BodyStart {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Question1' render={(props) => <Question1 {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Question2' render={(props) => <Question2 {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Question3' render={(props) => <Question3 {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Question4' render={(props) => <Question4 {...props} dispatch={this.props.dispatch} />} />
          <Route path='/ReviewForm' render={(props) => <ReviewForm {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Awesome' component={Awesome} />
        </HashRouter>
      </div>
    );
  }
}

const stateOnProps = (reduxState) => ({ reduxState });

export default connect(stateOnProps)(App);