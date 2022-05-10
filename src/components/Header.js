import React from 'react';
import TypeWriter from 'react-typewriter';
import './Header.css';

const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description1 = data.description1;
    var description2 = data.description2;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id='home'>
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>
          Hide navigation
        </a>

        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothscroll' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#portfolio'>
              Projects
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>
            <TypeWriter typing={1}>
              {name ? (
                <span>
                  Hello there,
                  <br />
                  I&#39;m Carlos!
                </span>
              ) : null}
            </TypeWriter>
          </h1>
          <h3>
            <span>
              I&#39;m a {occupation} based in {city}.
              <br />
              <br />
              {description1}
              <br />
              <br />
              {description2}
            </span>
          </h3>
          <hr />
          <ul className='social'>{networks}</ul>
        </div>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
