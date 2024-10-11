import insta from "../assets/Insta.svg";
import tweet from "../assets/Tweeter.png";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/Github.png";

const Footer = () => {
  return (
    <footer className="flex items-center flex-col justify-center gap-2">
      <div className="flex justify-center gap-10">
        <a
          href="https://www.instagram.com/sarvesh_hadgaonkar18/"
          target="_blank"
        >
          <img src={insta} alt="Instagram" className="h-8" />
        </a>
        <a href="https://x.com/SarveshHadgaon2" target="_blank">
          <img src={tweet} alt="Tweeter" className="h-8" />
        </a>
        <a
          href="www.linkedin.com/in/sarvesh-hadgaonkar-050a54245"
          target="_blank"
        >
          <img src={linkedin} alt="LinkedIn" className="h-8" />
        </a>
        <a href="https://github.com/Sarvesh0820" target="_blank">
          <img src={github} alt="Github" className="h-8" />
        </a>
      </div>
      <p className="text-white">
        &copy; 2024 Sarvesh Hadgaonkar. All rights reserved. Built
      </p>
    </footer>
  );
};

export default Footer;
