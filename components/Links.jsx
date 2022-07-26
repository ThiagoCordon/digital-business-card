import Twitter from "./Twitter.png";
import Facebook from "./facebook.png";
import Instagram from "./Instagram.png";
import Github from "./Github.png";

export default function Links() {
  return (
    <div className="links">
      <img src={Twitter} alt="tw" />
      <img src={Facebook} alt="fb" />
      <img src={Instagram} alt="ig" />
      <img src={Github} alt="github" />
    </div>
  );
}
