import Linkedin from "../src/assets/linkedin.png"

export default function Info() {
  return (
    <div className="info">
      <img src="./src/assets/picture.png" alt="woman" />
      <div className="information">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <p>laurasmith.website</p>
      </div>
      <div className="buttons">
        <button>
          <img src="./src/assets/Mail.png" alt="mail" /> <p>Email</p>
        </button>
        <button className="linkedin">
          <img src={Linkedin} alt="linkedin" />
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}
