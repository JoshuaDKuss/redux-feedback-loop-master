import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import Header from '../Header/Header';
//import Footer from '../Footer/Footer';
//import Body from '../Body/Body';
//import { connect } from 'react-redux';
//import AddCust from '../AddCust/AddCust';
//import { HashRouter, Route, Link } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    console.log('in componentDidMount');
  }

  render() {
    return (
      <div className="App">
        {/* <HashRouter> */}

          <Header />
          
          {/* <ul>
            <li><Link to="/">Add Pizzas</Link></li>
            <li><Link to="/order">Order Info</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
          <Route exact path="/"
              render={(props) => <Body {...props}
              dispatch={this.props.dispatch} />}
          />
          <Route path="/order"
              render={(props) => <AddCust {...props}
              dispatch={this.props.dispatch} />}
          />
          <Route path="/checkout"
              render={(props) => <Footer {...props}
              dispatch={this.props.dispatch}
              state = {this.props.reduxState} />}
          /> */}
        {/* </HashRouter> */}
      </div>
    );
  }
}

//const reduxStateToProps = (reduxState) => ({ reduxState });

//export default connect(reduxStateToProps)(App);

export default App;

