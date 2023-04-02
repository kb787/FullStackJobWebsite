import "./Guidelines.css";

const Guidelines = () => {
  return (
    <div className="Guidelines">
      <h1 className="GTit">Guidelines</h1>
      <p className="Gcont">
        <li>
          Look for verifiable company email addresses. Larger, more established
          companies usually have email addresses with top level domains that
          match their websites. Generally, communications from such large
          established companies do not come from publicly available addresses
          like yahoo or gmail.
        </li>
        <li>
          {" "}
          If you are contacted by someone with a generic address, ask if they
          are able to conduct communications via a company domain email address.
          If they cannot or will not, proceed with caution Watch closely for
          email addresses with misspelled or “spoofed” company names. are often
          similar to, but not exactly matching the actual company name.
        </li>
        <li>
          Examples of suspicious addresses include “Info@company.net” instead of
          “Info@company.com,” and misspelled company names like
          “Info@companie.com” or “Info@compaany.com.” Match the job offer to
          your application
        </li>
        <li>
          Avoid bait-and-switch scams by confirming that employers that respond
          to your applications are offering the job for which you applied.
        </li>
        <li>
          Be cautious when pursuing positions with salaries, perks and
          flexibility that seem too good to be true. Ask questions to confirm
          that the position is salaried (not commission only) and that there is
          a physical base of operations when a “work from home” opportunity is
          advertised.
        </li>
        <li>
          {" "}
          Insist on an in-person or video interview. Be wary of job offers that
          come with little or no interview process. Scammers often avoid
          face-to-face interviews by relying on chat services, such as Google
          Hangouts or WhatsApp while offering “work from home” positions.
        </li>
        <li>
          {" "}
          Always report suspicious communications to Indeed. If you are
          contacted by someone you suspect of fraudulent intentions or
          suspicious business practices, please contact Indeed immediately
        </li>
      </p>
    </div>
  );
};

export default Guidelines;
