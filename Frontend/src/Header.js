import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({
  handleRole,
  handleRegion,
  handleSign,
  setRegion,
  setRole,
  handleSearch
}) => {
  return (
    <div className="Header">
      <nav className="navg">
        <h1 className="header"> JOBWEB </h1>
        <ul className="hnav">
          <li className>
            <Link className="linking" to="/">
              Home
            </Link>
          </li>
          <li className="hnav">
            <Link className="linking" to="/">
              Find Jobs
            </Link>
          </li>
          <li className="hnav">
            <Link className="linking" to="/prof">
              Create Profile
            </Link>
            <li className="hnav">
              <Link className="linking" to="/profilesCreated">
                View Profiles
              </Link>
            </li>
          </li>
        </ul>
        <div className="inputforms">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="headerlabel">
              Enter Location
            </label>
            <input
              type="text"
              className="headerform"
              id="i1"
              placeholder="Ex. Mumbai"
              value={handleRegion}
              onSubmit={(e) => setRegion(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="headerlabel">
              Enter Job Title
            </label>
            <input
              type="text"
              className="headerform"
              id="i2"
              placeholder="Ex Web Developer"
              value={handleRole}
              onSubmit={(e) => setRole(e.target.value)}
            />
          </div>
          <button type="button" className="searchBtn" onClick={handleSearch}>
            Search Jobs
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
