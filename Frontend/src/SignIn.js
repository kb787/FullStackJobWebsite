import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="SignIn">
      <main className="Scontent">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Sign In</h1>
            <p className="signC">
              By creating an account or logging in, you understand and agree to
              Indeed's Terms. You also acknowledge our Cookie and Privacy
              policies. You will receive marketing messages from JOBWEB and may
              opt out at any time by following the unsubscribe link in our
              messages, or as detailed in our terms.
            </p>
            <div className="SignInForm">
              <input
                type="email"
                className="signinformcontrol"
                id="exampleFormControlInput1"
                placeholder="Enter your email"
              />
            </div>
            <br />
            <div className="SignInForm">
              <input
                type="password"
                className="signinformcontrol"
                id="exampleFormControlInput1"
                placeholder="Enter your password"
              />
            </div>
            <ul>
              <button type="button" className="SignInBtn">
                Submit details
              </button>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
