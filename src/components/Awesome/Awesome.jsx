import React, {Component} from 'react';

class Awesome extends Component {
    //review = { feeling: '', understanding: '', support: '', comments: '' }; 

    handleClickA = () => {
        this.props.history.push('/');
    } // end HC

    render(){
        return(
            <>
            {/* <iframe src="https://giphy.com/embed/l1J9skVOajpIYloyc" width="360" namesite='None' height="288" title="giphy" frameBorder="0"  */}
            {/* className="giphy-embed" allowFullScreen></iframe><p><a  alt="via GIPHY"></a></p> */}
            {/* href="https://giphy.com/gifs/earwolf-lauren-lapkus-l1J9skVOajpIYloyc" */}
            <h2>Have a great day!</h2>
            <img src="/images/youreawesomelaurenlapkus.gif" width="360" alt="you're awesome, via GIPHY" />
                
            <br /><br /><br /><button id="submit" onClick={this.handleClickA}>restart</button>
            </>
        )
    }
    review = { feeling: '', understanding: '', support: '', comments: '' };
}
export default Awesome;