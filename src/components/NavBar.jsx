

import {Link, NavLink} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import '../css/navbar.css'




const NavBar = () => {


    // toggle Nav Bar
    const toggleNav = (e) => {
        e.stopPropagation();
        if (window.innerWidth >= 480 ) {
            e.currentTarget.parentElement.querySelector('.nav-links').classList.toggle('show-nav-large-screen');
        } 
        if (window.innerWidth <= 470) {
            e.currentTarget.parentElement.querySelector('.nav-links').classList.toggle('show-nav-small-screen');
        }
        
    }


    // Setup Auth
    const { loginWithRedirect, logout, isAuthenticated , user} = useAuth0();

const itemLinks = [
    {
        name:'Home',
        display:'/'
    },
    {
        name:'Shop',
        display:'/shop'
    },
    {
        name:'Cart Shop',
        display:'/cart'
    },
    {
        name:'Blog',
        display:'/blog'
    },
    {
        name:'About',
        display:'/about'
    },
    {
        name:'Contact',
        display:'/contact'
    },
]

    return (
        <nav>
            <div className="logo">
                <Link to={'/'}><img src={require('../images/logo/logo.png')} alt="logo-img" /></Link>
            </div>
            <ul className='nav-links'>
                {
                    itemLinks.map((item,i) => {
                        return(
                            <li key={i}>
                                <NavLink to={item.display}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="actions-account">

                {/* ======== Check If User Is Logged In Or Not ======= */}
                {
                    isAuthenticated ?
                    <>
                    <li className='user-name'><img src={user.picture} alt="user-img" /></li>
                    <li className='log-out' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out <i className="fa-solid fa-arrow-right"></i>
                </li>
                    </>
                    :
                    <li className='log-in'>
                <NavLink  onClick={() => loginWithRedirect()}> <i className="fa-solid fa-arrow-left"></i> Log In</NavLink>
                </li>
        }
            </ul>
            <div className="bars" onClick={(e) => toggleNav(e)}><i className="fa-solid fa-bars-staggered"></i></div>
        </nav>
    )

}




export default NavBar;