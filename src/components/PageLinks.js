import {pageLinks} from '../data';

function PageLinks({parentClass, itemClass}) {
  const renderedLinks = pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className={itemClass}>
          {link.text}
        </a>
      </li>
    );
  });
  return <ul className={parentClass}>{renderedLinks}</ul>;
}

export default PageLinks;
