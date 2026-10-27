import SocialLinks from './SocialLinks';

const Footer = ({ data = {} }) => {
  const { social = [] } = data;

  return (
    <footer>
      <div className='row'>
        <div className='twelve columns centered'>
          <SocialLinks className='social-links' networks={social} />

          <ul className='copyright'>
            <li>
              &copy; {new Date().getFullYear()} No rights reserved. Please share or get
              inspiration from this work!
            </li>
          </ul>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
