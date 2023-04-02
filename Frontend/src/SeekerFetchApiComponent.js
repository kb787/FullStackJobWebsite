import React from "react";
import SeekerFetchApiService from "./SeekerFetchApiService";
import "./SeekerFetchApiComponent.css";
import { Link } from "react-router-dom";

export default class SeekerFetchApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }
  deleteSeekerProfiles(seekerId) {
    SeekerFetchApiService.deleteSeekerProfiles(seekerId).then((res) => {
      this.setState({
        profiles: this.state.profiles.filter(
          (profile) => profile.id !== seekerId
        )
      });
    });
  }
  componentDidMount() {
    SeekerFetchApiService.getSeekerProfiles()
      .then((data) => {
        this.setState({ profiles: data });
        console.log(this.state.data);
      })
      .catch(function (ex) {
        console.log("Request not found");
      });
  }

  render() {
    return (
      <div className="PosterFetchApiComponent">
        <h2 className="JobContentHeading">Seeker Profile</h2>
        {this.state.profiles.map((profile) => (
          <p className="Mcontent">
            <div className="PostedJobsContent">
              <br></br>
              <br></br>
              <li>{this.state.profile.seekerName}</li>
              <br></br>
              <li>{this.state.profile.seekerDegree}</li>
              <br></br>
              <li>{this.state.profile.seekerSpecialization}</li>
              <br></br>
              <li>{this.state.profile.seekerSkills}</li>
              <br></br>
              <li>{this.state.profile.seekerWorkExperience}</li>
              <br></br>
              <li>{this.state.profile.seekerOtherProfile}</li>
              <br></br>
              <li>{this.state.profile.seekerJobTitle}</li>
              <br></br>
              <li>{this.state.profile.seekerJobType}</li>
              <br></br>
            </div>
          </p>
        ))}
        <br />
        <Link className="linking" to="/prof">
          <button type="button" className="PostButton">
            Add Profile
          </button>
        </Link>
        <br />
        <br />
        <Link className="linking" to="/profilesCreated">
          <button type="button" className="PostButton">
            View Profile
          </button>
        </Link>
        <br />
        <br />
        <Link className="linking" to="/prof">
          <button type="button" className="PostButton">
            Edit Profile
          </button>
        </Link>
        <br />
        <br />
      </div>
    );
  }
}
