import "./Profile.css";
import { Link } from "react-router-dom";
import { Component } from "react";

const Profile = ({
  handleName,
  setNameValue,
  handleDeg,
  setDegValue,
  handleSpec,
  setSpecValue,
  handleType,
  setTypeValue,
  handleSkill,
  setSkillValue,
  handleExp,
  setExpValue,
  handlePort,
  setPortValue,
  handleJob,
  setJobValue
}) => {
  {
    /*
  class Filter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        myName: ""
      };
    }

    submitForm = (e) => {
      e.preventDefault();

      this.props.handleData(this.state);
    };

    setNameValue = (e) => {
      this.setState({
        handleName: e.target.value
      });
    };

    setDegValue = (e) => {
      this.setState({
        handleDeg: e.target.value
      });
    };

    setSpecValue = (e) => {
      this.setState({
        handleSpec: e.target.value
      });
    };

    setDegValue = (e) => {
      this.setState({
        handleDeg: e.target.value
      });
    };

    setTypeValue = (e) => {
      this.setState({
        handleType: e.target.value
      });
    };

    setSkillValue = (e) => {
      this.setState({
        handleSkill: e.target.value
      });
    };

    setPortValue = (e) => {
      this.setState({
        handlePort: e.target.value
      });
    };

    setJobValue = (e) => {
      this.setState({
        handleJob: e.target.value
      });
    };

    setDegValue = (e) => {
      this.setState({
        handleDeg: e.target.value
      });
    };

  }
*/
  }

  return (
    <div className="Profile">
      <main>
        <div className="ProfileForm">
          <div>
            <input
              type="text"
              className="profform"
              id="i2"
              placeholder="Enter name"
              value={handleName}
              onSubmit={(e) => {
                setNameValue(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              className="profform"
              id="i2"
              placeholder="Enter degree"
              value={handleDeg}
              onSubmit={(e) => setDegValue(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              className="profform"
              id="i2"
              placeholder=" Enter Specialization"
              value={handleSpec}
              onSubmit={(e) => setSpecValue(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              className="profform"
              id="i2"
              placeholder="Enter skills"
              value={handleSkill}
              onSubmit={(e) => setSkillValue(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="number"
              className="profform"
              id="i2"
              placeholder="Enter work experience"
              value={handleExp}
              onSubmit={(e) => setExpValue(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="link"
              className="profform"
              id="i2"
              placeholder="Enter other profiles"
              value={handlePort}
              onSubmit={(e) => setPortValue(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              className="profform"
              id="i2"
              placeholder="Enter job title"
              value={handleJob}
              onSubmit={(e) => setJobValue(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              className="profform"
              id="i2"
              placeholder="Enter type"
              value={handleType}
              onSubmit={(e) => setTypeValue(e.target.value)}
            />
          </div>
          <br />
          <Link className="linking" to="/profilesCreated">
            <button type="button" class="Profb">
              Submit
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Profile;
