import React , {useState} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SideHeader from "./SideHeader";
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

function Header() {

   const [showSideNav , setSideNav] = useState(false);

  const handleSideNav = () => {
    setSideNav((prev) => !prev);
  }

  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <h2>QuizBot</h2>
        </Link>
      </div>

      <div className="nav-link">
        <Link to="/home">
          <span>Home</span>
        </Link>

        <Link to="/history">
          <span>History</span>
        </Link>

        <Link to="/blog">
          <span>Blog</span>
        </Link>

        <Link to="/about">
          <span>About</span>
        </Link>

        <Link to="/account">
          <span>Account</span>
        </Link>
      </div>
   
       <div className="side-button">
        <button  onClick={handleSideNav} >
           <ReorderOutlinedIcon />
        </button>
        
       </div>

       <div className="side-nav-small">
         {showSideNav && <SideHeader />}
       </div>
      
    </div>
  );
}

export default Header;
