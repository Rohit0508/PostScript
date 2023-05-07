import { React, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sidebar = document.querySelector('.sidebar');
    if (windowSize <= 998) {
      sidebar.classList.remove('show-sidebar');
    }
  }, [windowSize]);

  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show-sidebar');
  };

  return (
    <>
    
      <nav className="Navbar">
        <div className="Main">
          <h2>
            <span>B</span>log <span>g</span>er
          </h2>
        </div>
        <div className="ListDiv">
          <ul className="Navbar-List">
            <li className="list">
              <a href="./about">AboutUs</a>
            </li>
            <li className="list">
              <a href="./login">Write</a>
            </li>
            <li className="list">
              <a href="./signup">JoinUs</a>
            </li>
            <li className="list">
              <a href="./login">SignIn</a>
            </li>
            
            {windowSize <= 998 && (
              <div className="Menu-Bar-Wrapper">
              <li className="menu-btn hide-menu-btn" onClick={toggleSidebar}>
                <AiOutlineMenu className='Menu-Bar'/>
              </li>
            </div>
            
            )}
          </ul>
        </div>

        <div className="sidebar">
          <ul>
          <li >
              <a href="./about">AboutUs</a>
            </li>
            <li >
              <a href="./write">Write</a>
            </li>
            <li >
              <a href="./signup">JoinUs</a>
            </li>
            <li >
              <a href="./login">SignIn</a>
            </li>
           
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;