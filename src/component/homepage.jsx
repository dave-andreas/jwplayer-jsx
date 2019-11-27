import React, {Component} from 'react'
import img1 from './../img/img1.png'
import img2 from './../img/img2.png'
import img3 from './../img/img3.png'
import img4 from './../img/img4.png'

class Homepage extends Component {
    state = {  }
    render() { 
        return (
            <div className="jumbotron-container">
                <div className="jumbotron-component">
                    <div className="jumbotron-textbig">
                        Unlock the power of video delivery
                    </div>
                    <div className="jumbotron-textsecond">
                        Grow your business with JW Player's flexible platform of video services,
                        <br />powered by billions of signals from across our vast network.
                    </div>
                    <div className="jumbotron-btn">
                        <div className="button-container">
                            Get Started
                            <span>
                                <i className="fas fa-play" />
                            </span>
                        </div>
                    </div>
                    <div className="jumbotron-img">
                        <img src={img1} alt='logo' className="img1"/>
                        <img src={img2} alt='logo' className="img2"/>
                        <img src={img3} alt='logo' className="img3"/>
                        <img src={img4} alt='logo' className="img4"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Homepage;