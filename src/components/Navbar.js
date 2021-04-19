import React,{useState} from "react";
import "./Navbar.css";
function Navbar() {
  window.addEventListener('resize', function(event) {
    if (window.innerWidth > 375) {
      setFlag(true);
    }
    if (window.innerWidth < 375) {
      setFlag(false);
    }
  });
  const [flag ,setFlag] = useState(true); 
    const handleClick = () => {
      setFlag(!flag);
    }
  return (
    <div className="navbar">
      <div className="navbar_content">
      <img src="/logo.svg" className="navbar_logo" />
      { flag && <div className='navbar_options' id='menu'>
        <div className="navbar_left">
          <ul className="navbar_list">
            <li className="navbar_item">Features</li>
            <li className="navbar_item">Pricing</li>
            <li className="navbar_item">Resources</li>
          </ul>
        </div>
        <div className="navbar_right">
          <span className="login">Login</span>
          <span className="sign_up">Sign Up</span>
        </div>
        </div>}
        <div className="more" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
