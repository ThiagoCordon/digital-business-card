export default function Info() {
  return (
    <div className="info">
      <img src="./images/Picture.png" alt="woman" />
      <div className="information">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <p>laurasmith.website</p>
      </div>
      <div className="buttons">
        <button>
          <img src="./images/Mail.png" alt="mail" /> <p>Email</p>
        </button>
        <button className="linkedin">
          <img src="./images/linkedin.png" alt="linkedin" />
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}
