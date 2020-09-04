import React, { Component } from 'react'
import logo from '../svg/logo.svg'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
            <div className='header-top'>
<img src ={logo} alt='logo' className='logo'/>
<Link className='signin-btn'>sign in</Link>
            </div>
            <div className='header-content'>
                <h1>See what's next  </h1>
                <h2> watch anywhere cancel anywhere</h2>
                <Link className='main-offer-btn'> try it now</Link>
            </div>
            </div>
        )
    }
}
