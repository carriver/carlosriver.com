import TypewriterText from './TypewriterText';
import SocialLinks from './SocialLinks';

const Header = ({ data = {} }) => {
  const {
    name = '',
    occupation = '',
    description1 = '',
    description2 = '',
    address: { city = '' } = {},
    social = [],
  } = data;

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
            {name ? <TypewriterText lines={['Hello there,', "I'm Carlos!"]} /> : null}
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
          <SocialLinks className='social' networks={social} />
        </div>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about' aria-label='Scroll to About'>
          <i className='icon-down-circle' aria-hidden='true'></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
