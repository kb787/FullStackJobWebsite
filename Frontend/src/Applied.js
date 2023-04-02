import "./Applied.css";
import { Link } from "react-router-dom";

const Applied = () => {
  return (
    <div className="Applied">
      <h1 className="AppliedHead">Successfully Applied For Job</h1>
      <br />
      <button type="button" className="dashbordBtn">
        <Link to="/" className="appliedLinking">
          Return to Dashbord
        </Link>
      </button>
    </div>
  );
};

export default Applied;
