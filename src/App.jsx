import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ still works for icons
import "./index.css"; // 👈 styling here
import profilepic from "./assets/download.jpeg"
// import project_one from "./assets/project-one.png"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiJsonwebtokens, SiPostman } from "react-icons/si";
import { MdSecurity } from "react-icons/md";

function MyPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skills"><li>Skills</li></a>
          <a href="#projects"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-pic">
          <img
            src={profilepic}
            alt="Zainuddin"
          />
        </div>
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Zainuddin 👋</span></h1>
          <h2>Full-Stack Web Developer</h2>
          <p>I build modern web apps using React & Node.js</p>
          {/* Download CV Button */}
          <a href="/Zainuddin-CV.pdf" download className="cv-btn">
            Download CV
          </a>
        </div>

      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hi, I’m Zainuddin Shaikh, a passionate Full-Stack Web Developer who enjoys transforming ideas into real-world digital solutions. My journey in web development started with curiosity about how websites work, and over time, I’ve built a strong skill set that allows me to create complete applications — from the frontend interface that users interact with to the backend logic that powers everything behind the scenes.

          On the frontend, I’ve developed a solid foundation in HTML, CSS, and JavaScript. I use frameworks and tools like Bootstrap and Tailwind CSS to design modern, responsive layouts that look great on all devices. I also work extensively with React.js, which allows me to create dynamic, interactive, and scalable web applications with smooth user experiences.

          On the backend, I specialize in Node.js and Express.js, where I focus on writing clean, efficient, and secure code. I’ve implemented important features such as authentication and authorization using cookie-parser, JSON Web Tokens (JWT), and bcrypt to ensure user data is handled safely. For databases, I work with MongoDB, which helps me manage and store data in a flexible and scalable way, making my applications ready for real-world usage.

          I enjoy solving problems and building projects that combine both design and functionality. Every project I create is an opportunity for me to sharpen my skills and push my creativity further. Whether it’s designing a simple user-friendly interface or developing a complex backend system, I take pride in paying attention to detail and delivering results.

          Beyond just coding, I am continuously exploring new technologies, tools, and best practices to improve as a developer. My goal is not only to build applications but to craft innovative, reliable, and impactful solutions that bring value to users and businesses.

          I believe in continuous learning, teamwork, and creativity, and I’m excited about the endless possibilities that web development has to offer. 🚀
        </p>
      </section>

      <section id="skills">
        <h2>⚡ Skills</h2>

        <div className="skills-container">
          {/* Frontend */}
          <div className="skill"><i className="fab fa-html5 html"></i> HTML5</div>
          <div className="skill"><i className="fab fa-css3-alt css"></i> CSS3</div>
          <div className="skill"><i className="fab fa-js-square js"></i> JavaScript (ES6+)</div>
          <div className="skill"><i className="fab fa-bootstrap bootstrap"></i> Bootstrap</div>
          <div className="skill"><SiTailwindcss className="tailwind" /><span>Tailwind CSS</span></div>
          <div className="skill"><i className="fab fa-react react"></i> React.js</div>
          <div className="skill"><i className="fab fa-node-js node"></i> Node.js</div>
          <div className="skill"><i className="fas fa-server express"></i> Express.js</div>
          <div className="skill"><i className="fas fa-shield-alt auth"></i> Auth (JWT, bcrypt)</div>
          <div className="skill"><i className="fas fa-database mongo"></i> MongoDB</div>
          <div className="skill"><i className="fab fa-git-alt git"></i> Git & GitHub</div>
          <div className="skill"><i className="fas fa-paper-plane postman"></i> Postman</div>
        </div>
      </section>

      {/* Projects Section */}
    <div className="heading">
        <h2>Projects</h2>
    </div>
      <section id="projects" className="projects">
        <div className="project-grid">
          <div className="project-card">
            <div className="project-img-one">
              {/* Image */}
            </div>
            <div className="project-info">
              <h3>E-Commerce Store</h3>
              <p>A mobile e-commerce app with React.js and Firebase, featuring authentication, product listing, cart, and real-time database.</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-img-two">
              {/* Image */}
            </div>
            <div className="project-info">
              <h3>Expense Tracker App</h3>
              <p>An expense tracker built with React.js to manage income, expenses, and balance with a clean, user-friendly interface.</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-img-three">
              {/* Image */}
            </div>
            <div className="project-info">
              <h3>E-Commerce Store</h3>
              <p>A simple e-commerce store built with HTML, CSS, and JavaScript, featuring product display, and a responsive design.</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-img-four">
              {/* Image */}
            </div>
            <div className="project-info">
              <h3>Grocery Store</h3>
              <p>A groceries e-commerce store with product categories, cart system, and responsive design for a smooth shopping experience</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-img-five">
              {/* Image */}
            </div>
            <div className="project-info">
              <h3>Recipe Finder App</h3>
              <p>A recipe finder app that allows users to search recipes by ingredients or name, with a responsive design and interface.</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-img-six">
              {/* Image */}
            </div>
            <div className="project-info">
              <h3>OMDB App</h3>
              <p>A movie search app powered by the OMDB API, featuring search functionality, and a clean, responsive layout.</p>
              <a href="#">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
<footer id="contact" className="footer">
  <div className="footer-container">
    <h2 className="footer-title">Get in Touch</h2>
    <p>Let’s work together or just say hello 👋</p>

    <a href="mailto:zainuddin@example.com" className="footer-email">
      szainuddin119gmail.com
    </a>

    <div className="footer-links">
      <a href="https://github.com/Zainuddin-01" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/zain-uddin-77a385339?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNb36NBPPR3ehOEiOqR%2FFDA%3D%3D" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} Zainuddin. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default MyPortfolio;
