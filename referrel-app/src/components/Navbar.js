import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#">My Referrels</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">{props.aboutText}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              My Deals
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/#">Action</a></li>
              <li><a className="dropdown-item" href="/#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Leaderboard</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-info" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>   */

<>
<IconContext.Provider value={{color: '#fff'}}>
    <div className='navbar'>
      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key = {index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </IconContext.Provider>
</>
);
}

export default Navbar
// Navbar.propTypes = {title: PropTypes.string.isRequired,
// aboutText: PropTypes.string}

// Navbar.defaultProps = {
//     title: 'Some default system name',
//     aboutText: 'About text default'
// }