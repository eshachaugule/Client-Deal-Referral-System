import React from 'react'
import './OutNavbar.css';
import {IconContext} from 'react-icons';

function OutNavbar() {

  return (

<>

<IconContext.Provider value={{color: '#fff'}}>
    {/* <div className='outnavbar'>
      <Link to="" className='menu-bars'>
        <h1>Client-Deal Referral System</h1>
            <button className="btn btn-info" type="submit">Login</button>
      </Link>
    </div> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <h1 className="container" href="/#">Client-Deal Referral System</h1>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        <form className="d-flex">
            <button className="nav-login" type="submit" onClick={(e) => {
      e.preventDefault();
      window.location.href='/login';
      }}>Login</button>
        </form>
        <form className="d-flex">
          <button className="nav-signup" type="submit" onClick={(e) => {
      e.preventDefault();
      window.location.href='/createaccount';
      }}>Signup</button>
        </form>

      </div>
    </div>
</nav>   

    </IconContext.Provider>
</>
);
}

export default OutNavbar
// Navbar.propTypes = {title: PropTypes.string.isRequired,
// aboutText: PropTypes.string}

// Navbar.defaultProps = {
//     title: 'Some default system name',
//     aboutText: 'About text default'
// }