import styles from './SocialLinks.module.css';

const SocialLinks = ({ networks = [], className }) => (
  <ul className={className}>
    {networks.map(({ name, label = name, url, className: iconClassName }) => (
      <li key={name}>
        <a className={styles.link} href={url} aria-label={label} title={label}>
          <i className={iconClassName} aria-hidden='true'></i>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
