import React, { useEffect } from "react";
import { FaCode, FaPaintBrush, FaDatabase, FaBrain, FaTools } from "react-icons/fa";
import "../styles/Services.css";

const services = [
  {
    id: "01",
    icon: <FaCode />,
    title: "Full-Stack Development",
    description: "Building scalable web apps with MERN & .NET — optimized for performance, security, and UX.",
  },
  {
    id: "02",
    icon: <FaPaintBrush />,
    title: "Frontend & UI/UX Design",
    description: "Transforming ideas into elegant, responsive interfaces with React.js, CSS3, and modern design practices.",
  },
  {
    id: "03",
    icon: <FaDatabase />,
    title: "Database Architecture",
    description: "Designing and optimizing databases (MongoDB, MySQL) for reliability, speed, and seamless integration.",
  },
  {
    id: "04",
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description: "Creating predictive models using Python (Scikit-learn, Random Forest) and deploying them to production.",
  },
  {
    id: "05",
    icon: <FaTools />,
    title: "DevOps & Deployment",
    description: "Streamlining deployment with GitHub, CI/CD, API security (JWT), and hosting on Vercel, Render, & Netlify.",
  },
];

const Services = () => {
  useEffect(() => {
    // Scroll animation
    const cards = document.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>What I Bring to the Table</h2>
        <p>
          Every great product starts with a strong foundation. Here's how I help
          turn ideas into reality 🚀
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 style={{ color: "var(--accent)" }}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
