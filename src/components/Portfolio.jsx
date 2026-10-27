import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = ({ data = {} }) => {
  const { projects = [] } = data;

  const items = projects.map((project) => {
    const projectImage = 'images/portfolio/' + project.image;
    return (
      <div key={project.title} className='columns portfolio-item'>
        <div className='item-wrap'>
          <a href={project.url} title={project.title}>
            <img className='img' alt={project.title} src={projectImage} />
            <div className='overlay'>
              <div className='portfolio-item-meta'>
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
            <div className='link-icon'>
              <i className='fa fa-link'></i>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id='portfolio'>
      <div className='row'>
        <div className={`twelve columns collapsed ${styles.main}`}>
          <h1>Check Out Some of My Projects!</h1>

          <div
            className={`bgrid-quarters s-bgrid-thirds cf ${styles.portfolioWrapper}`}>
            {items}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
