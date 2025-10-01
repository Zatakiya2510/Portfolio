import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiDotnet, SiTailwindcss, SiJavascript } from "react-icons/si";
import "../styles/About.css";
import avatar from "../images/avtar.JPG";

const skills = [
  { name: "React.js", icon: <FaReact size={24} color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={24} color="#68A063" /> },
  { name: "Express.js", icon: <SiExpress size={24} color="#000" /> },
  { name: "MongoDB", icon: <SiMongodb size={24} color="#4DB33D" /> },
  { name: ".NET", icon: <SiDotnet size={24} color="#512BD4" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#06B6D4" /> },
  { name: "JavaScript", icon: <SiJavascript size={24} color="#F7DF1E" /> },
  { name: "Python", icon: <FaPython size={24} color="#3776AB" /> },
];

export default function About() {
  return (
    <section id="about" className="about-section container">
      <h2 className="section-title" style={{fontSize:"3rem"}}>About Me</h2>

      <div className="about-card">
        {/* Left: Avatar */}
        <div className="about-left">
          <img src={avatar} alt="Abhishek Zatakiya" className="about-avatar" />
        </div>

        {/* Right: Bio */}
        <div className="about-right">
          <p className="about-bio">
            Results-driven <span className="highlight">Full-Stack Developer</span> with expertise in{" "}
            <span className="highlight">MERN stack</span>, <span className="highlight">React.js</span>, and{" "}
            <span className="highlight">.NET technologies</span>. Skilled in building scalable, secure, and
            user-friendly web applications. Passionate about solving real-world problems and contributing
            to innovative projects.
          </p>

          <div className="about-info">
            <div><strong>Contact:</strong> +91 6352342951 • abhishekzatakiya25102004@gmail.com</div>
          </div>

          <div className="skills">
            <h3>Skills</h3>
            <div className="skill-tags">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
