import React from 'react';

const Footer = ({ data = {} }) => {
  const { social = [] } = data;

  const networks = social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <footer>
      <div className='row'>
        <div className='twelve columns centered'>
          <ul className='social-links'>{networks}</ul>

          <ul className='copyright'>
            <li>
              &copy; 2025 No rights reserved. Please share or get inspiration
              from this work!
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
