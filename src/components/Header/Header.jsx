import React, {Component} from 'react';

class Header extends Component{
  render() {
    return (
      <div>
        
          <header className="App-header">
          <h1 className="App-title">
          <span role="img" aria-label="raised">🤨</span>
          <span role="img" aria-label="smirking">😏</span>
          <span role="img" aria-label="hugging">🤗</span>
          <span role="img" aria-label="dizzy">😵</span>
          <span role="img" aria-label="smiling">😀</span>
          <span role="img" aria-label="exploding">🤯</span>
          <span role="img" aria-label="stars">🤩</span>
          <span role="img" aria-label="weary">😩</span>
          <span role="img" aria-label="nerd">🤓</span>
          <br></br>Feedback!   
          
          </h1>
          {/* <h4><i>Don't forget it, y'all!</i></h4> */}
          </header>
        
      </div>
    ); // end return
  } // end render
} // end class

export default Header;