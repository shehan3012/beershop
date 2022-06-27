import React from 'react';
import Logo from '../Logo';
import './styles.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  return (
    <footer>
      <p>
Like our selection ? Then add your favorite beers and we will deliver at your doorstep free of cost      </p>
<h4>Contact Me:</h4>
    <Link to={{ pathname: "https://www.linkedin.com/in/shehan-shetty-32a710145/"}} target="_blank">
        Linkedin
    </Link> <br />

    <Link to={{pathname:"https://github.com/shehan3012"}} target="_blank">
    Github</Link> <br />

    <Link to={{pathname:"https://www.instagram.com/shehan_shady/"}} target="_blank">
    Instagram</Link>
      <Logo />
    </footer>
  );
};

export default Footer;
