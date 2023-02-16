import {socialLinks} from '../data';

function SocialLinks({parentClass, itemClass}) {
  const renderedLinks = socialLinks.map((icon) => {
    return (
      <li key={icon.id}>
        <a
          href={icon.href}
          rel='noreferrer'
          target='_blank'
          className={itemClass}
        >
          <i className={icon.icon}></i>
        </a>
      </li>
    );
  });
  return <ul className={parentClass}>{renderedLinks}</ul>;
}

export default SocialLinks;

