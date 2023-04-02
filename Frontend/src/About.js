import "./About.css";

const About = () => {
  return (
    <div className="About">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw9lBNrncgs8wFT-lwnV5artbXRyRqQg1iQ&usqp=CAU"
        className="aboutImg"
        alt="Images"
      />
      <div className="aboutCont">
        <h1 className="aboutTitle">About Us</h1>
        <p className="aboutPara">
          JOBWEB is a one step sollution for job requirements. Create your
          profile, provide details regarding education , skillset , location and
          find the perfect matching job for you
          <h3>Creator :- Karan Bhanushali</h3>
        </p>
      </div>
    </div>
  );
};

export default About;
