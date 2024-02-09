import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import Navbar from "../navbar/Navbar";
import "./header.css";
const Header = ({ scroll }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setNavOpen(true);
    }
  }, [navOpen]);
  return (
    <header>
      <div className='header__parent'>
        <div className='image__box'>
          <img src='/images/logo.jpg' alt='Logo' />

          {!navOpen ? (
            <>
              {window.innerWidth < 500 && (
                <button
                  className='menu-btn'
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <i className='ri-menu-fill'></i>
                </button>
              )}
            </>
          ) : (
            <>
              {window.innerWidth < 500 && (
                <button
                  className='menu-btn'
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <i className='ri-close-fill'></i>
                </button>
              )}
            </>
          )}
        </div>

        {navOpen && (
          <div className='user'>
            <button className='user-btn'>
              <i
                className='ri-user-3-fill'
                style={{ color: "darkblue" }}
              ></i>
            </button>
            <span>Hi Sam</span>
          </div>
        )}

        {navOpen && (
          <div className='action__box'>
            <Button
              text='Sign Up'
              color='#fff'
              bgColor='#1b0692f8'
            />
            <Button
              text='Sign In'
              color='#fff'
              bgColor='#1b0692f8'
            />
          </div>
        )}
      </div>

      <Navbar scroll={scroll} navOpen={navOpen} />
    </header>
  );
};

export default Header;
