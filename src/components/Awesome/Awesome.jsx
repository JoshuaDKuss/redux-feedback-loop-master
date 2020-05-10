import React, {Component} from 'react';

class Awesome extends Component {

    handleClickA = () => {
        this.props.history.push('/');
    } // end HC

    render(){
        return(
            <>
            {/* <iframe src="https://giphy.com/embed/l1J9skVOajpIYloyc" width="360" height="288" title="giphy" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a  */}
            {/* href="https://giphy.com/gifs/earwolf-lauren-lapkus-l1J9skVOajpIYloyc" alt="via GIPHY"></a></p> */}
            <h2>Have a great day!</h2>
            {/* <img src="/Awesome/youreawesomelaurenlapkus.gif" alt="you're awesome, via GIPHY" /> */}
                
            <br /><br /><br /><button id="submit" onClick={this.handleClickA}>restart</button>
            </>
        )
    }
}
export default Awesome;