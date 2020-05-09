import React, { Component } from 'react';
//import axios from 'axios'
import Question1 from '../Question1/Question1';

class Body extends Component {

//   state = {
//     pizzaList: []
//   }

  componentDidMount() {
    //this.getFeedback();
    console.log('Body mounted');
  }

  handleClickStart =() => {
      console.log('done been CLICKED');
      this.props.history.push('/Question1');
  }

//   getFeedback = () => {
//     axios.get('/api/pizza')
//       .then(response => {
//         this.setState({
//           pizzaList: response.data
//         })
//       }).catch(error => {
//         alert(`Could not get pizzas`);
//         console.log('Error getting pizzas', error)
//       })
//   };//end getPizzas

  render() {
    // console.log(this.state.pizzaList)
    return (
      <div>
          {/* <Question1 /> */}
          <button class="block" id="start" 
          onClick={ this.handleClickStart }>Click To Enter Feedback!</button>

          <route path="/Question1" component={ Question1 } />
          {/* <link to="/Question1"></link> */}

        {/* <h1>Pizzas</h1>
        <PizzaList
          pizzaList={this.state.pizzaList}
          dispatch={this.props.dispatch}
        /> */}
        </div>
    )
  };//end render
};//end return

// onClick={ this.handleClick }
// {/* <link to="/Question1"></link> */}


export default Body;