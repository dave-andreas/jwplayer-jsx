import React from 'react'
import {FaChevronDown,FaPlay} from 'react-icons/fa'
import Logo from './../img/logo.png'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    state = {}
    render() { 
        return (
            <div className="header-container">
                <div className="brand-container">
                    <img src={Logo} alt='logo' className="brand" />
                </div>
                <div className="menu-container">
                    <Link to={'/notfound'} style={{textDecoration: 'none', color: 'white'}}>
                        <div className="menu">
                            Products
                            <span style={{paddingLeft:'4px'}}>
                                <i><FaChevronDown/></i>
                            </span>
                        </div>
                    </Link>
                    <div className="menu">
                        Solution
                        <span style={{paddingLeft:'4px'}}>
                            <i><FaChevronDown/></i>
                        </span>
                    </div>
                    <div className="menu">
                        Developers
                        <span style={{paddingLeft:'4px'}}>
                            <FaChevronDown/>
                        </span>
                    </div>
                    <div className="menu">
                        Company
                        <span style={{paddingLeft:'4px'}}>
                            <i><FaChevronDown/></i>
                        </span>
                    </div>
                    <div className="menu">
                        Resources
                        <span style={{paddingLeft:'4px'}}>
                            <i><FaChevronDown/></i>
                        </span>
                    </div>
                    <div className="menu">
                        Pricing
                    </div>
                </div>
                <div className="bars-container">
                    <i className="fas fa-bars" />
                </div>
                <div className="menukanan-container">
                    <div className="signin">
                        Sign In
                    </div>
                    <div className="getstarted">
                        Get Started
                        <span style={{paddingLeft:'4px'}}>
                            <i><FaPlay/></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;

