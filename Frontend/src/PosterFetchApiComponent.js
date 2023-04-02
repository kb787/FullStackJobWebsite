import React from "react";
import PosterFetchApiService from "./PosterFetchApiService";
import "./PosterFetchApiComponent.css";
import { Link } from "react-router-dom";

export default class FetchApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  deleteJobPosts(posterId) {
    PosterFetchApiService.deleteJobPosts(posterId).then((res) => {
      this.setState({
        posts: this.state.posts.filter((post) => post.id !== posterId)
      });
    });
  }
  componentDidMount() {
    PosterFetchApiService.getJobPosts()
      .then((data) => {
        this.setState({ posts: data });
        console.log(this.state.data);
      })
      .catch(function (ex) {
        console.log("Request not found");
      });
  }
  addJobPosts(posterId) {
    this.state.props.history.posts.push("/postjob");
  }

  render() {
    return (
      <div className="PosterFetchApiComponent">
        <h2 className="JobContentHeading">Job Details</h2>
        {this.state.posts.map((post) => (
          <p className="Mcontent">
            <div className="PostedJobsContent">
              <br></br>
              <h4>Full Job Description</h4>
              <br></br>Looking for motivated candidate who will work cooperatly
              and must be familiar with above set of technologies
              <br></br>
              <li>
                Should be a graduate in computer science (BE,BTech,BSC,BCA)
              </li>
              <br></br>
              <li>{this.state.post.compName}</li>
              <br></br>
              <li>{post.vaccancies}</li>
              <li>A leader and ready to take up new challenges</li>
              <br></br>3 months training will be provided during which stipend
              will be 5000 per month after that full time roles
              <br></br>
              <h3>Job Types</h3>: {this.state.post.empJobType}
              <br></br>
              <h3>Salary</h3>: {this.state.post.empSalary}
              <br></br>
              <h3>Benefits:</h3>
              <br></br>
              <li>Health insurance</li>
              <br></br>
              <li>Paid sick time</li>
              <br></br>
              <li>Paid time off</li>
              <br></br>
              <h3>Schedule:</h3>
              <br></br>Day shift
              <br></br>Ability to commute/relocate:
              <br></br>
              {this.state.post.perName}
              <br></br>Education:
              <br></br>Bachelor's (Preferred)
            </div>
          </p>
        ))}
        <br />
        <Link className="linking" to="/postjob">
          <button type="button" className="PostButton">
            Add Post
          </button>
        </Link>
        <br />
        <br />
        <Link className="linking" to="/postedjob">
          <button type="button" className="PostButton">
            View Posts
          </button>
        </Link>
        <br />
        <br />
        <Link className="linking" to="/postjob">
          <button type="button" className="PostButton">
            Edit Post
          </button>
        </Link>
        <br />
        <br />
      </div>
    );
  }
}
