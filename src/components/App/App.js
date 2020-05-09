import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import Header from '../Header/Header';
import BodyStart from '../BodyStart/BodyStart';
//import Footer from '../Footer/Footer';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Question4 from '../Question4/Question4';
import { connect } from 'react-redux';

import { HashRouter, Route } from 'react-router-dom';  //, Link


class App extends Component {

  componentDidMount = () => {
    console.log('App.js componentDidMount', this.props);
  }

  handleClick = () => {
    console.log('HC app');
    //this.props.dispatch({ type: click });
    //this.props.history.push( '/Question1' );
  } // end HC

  render() {

    return (
      <div className="App">    
        <Header />
        <BodyStart />
        <HashRouter>

          <Route path='/Question1' render={(props) => <Question1 {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Question2' render={(props) => <Question2 {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Question3' render={(props) => <Question3 {...props} dispatch={this.props.dispatch} />} />
          <Route path='/Question4' render={(props) => <Question4 {...props} dispatch={this.props.dispatch} />} />

          {/* <ul>
            
            <li><Link to="/order">Order Info</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
          <Route exact path="/" render={(props) => <Body {...props} dispatch={this.props.dispatch} />} />
          <Route path="/order" render={(props) => <AddCust {...props} dispatch={this.props.dispatch} />} />
          <Route path="/checkout" render={(props) => 
                <Footer {...props} dispatch={this.props.dispatch}
              state = {this.props.reduxState} />}
          /> */}
        </HashRouter>
      </div>
    );
  }
}

const reduxStateToProps = (reduxState) => ({ reduxState });

export default connect(reduxStateToProps)(App);