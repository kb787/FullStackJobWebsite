import "./styles.css";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import SignIn from "./SignIn";
import Profile from "./Profile";
import { Routes, Route, Router } from "react-router-dom";
import PostJob from "./PostJob";
import About from "./About";
import Guidelines from "./Guidelines";
import SeekerFetchApiComponent from "./SeekerFetchApiComponent";
import Applied from "./Applied";
import PosterFetchApiComponent from "./PosterFetchApiComponent";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Card />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/prof" element={<Profile />} />
        <Route exact path="/postjob" element={<PostJob />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/guide" element={<Guidelines />} />
        <Route exact path="/apply" element={<Applied />} />
        <Route exact path="/postedjob" element={<PosterFetchApiComponent />} />
        <Route
          exact
          path="/profilesCreated"
          element={<SeekerFetchApiComponent />}
        />
        {/*<Route exact path="/profilecomp" element={<ProfileComponent />} />*/}
      </Routes>
      <Footer />
    </div>
  );
}
