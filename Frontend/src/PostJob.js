import "./PostJob.css";
import { Link } from "react-router-dom";

const PostJob = ({
  handleCompN,
  setCompN,
  handleEmployNo,
  setEmployNo,
  handlePersonName,
  setPersonName,
  handlePhoneNo,
  setPhoneNo,
  handleEmployRole,
  setEmployRole,
  handleSalary,
  setSalary,
  handleEmpJobType,
  setEmpJobType
}) => {
  return (
    <div className="PostJob">
      <main>
        <h1 className="PostT"> Employers Mode </h1>
        <div className="PostingForm">
          <div>
            <input
              type="text"
              className="postform"
              id="i2"
              placeholder="Enter company name"
              value={handleCompN}
              onSubmit={(e) => setCompN(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="number"
              className="postform"
              id="i2"
              placeholder="Enter no of vaccancies"
              value={handleEmployNo}
              onSubmit={(e) => setEmployNo(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="text"
              className="postform"
              id="i2"
              placeholder=" Enter your name"
              value={handlePersonName}
              onSubmit={(e) => setPersonName(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="phone-number"
              className="postform"
              id="i2"
              placeholder="Enter your phone no"
              value={handlePhoneNo}
              onSubmit={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="text"
              className="postform"
              id="i2"
              placeholder="Enter the employee role"
              value={handleEmployRole}
              onSubmit={(e) => setEmployRole(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="link"
              className="postform"
              id="i2"
              placeholder="Enter salary"
              value={handleSalary}
              onSubmit={(e) => setSalary(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="text"
              className="postform"
              id="i2"
              placeholder="Enter job type"
              value={handleEmpJobType}
              onSubmit={(e) => setEmpJobType(e.target.value)}
            />
          </div>

          <br />
          <br />
          <br />
          <Link className="linking" to="/postedjob">
            <button type="button" className="PostB">
              Submit
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PostJob;
