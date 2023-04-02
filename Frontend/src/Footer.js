import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="foot">
      <li id="link">
        <Link to="/postjob" className="footerLinking">
          PostJob
        </Link>
      </li>
      <li id="link">
        <Link to="/about" className="footerLinking">
          AboutUs
        </Link>
      </li>
      <li id="link">
        <Link to="/guide" className="footerLinking">
          Guidelines
        </Link>
      </li>
      <li id="link">
        <Link to="/postedjob" className="footerLinking">
          View More Job Posts
        </Link>
      </li>
    </footer>
  );
};

export default Footer;
