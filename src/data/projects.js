import p1 from "../images/p1.png";
import p2a from "../images/p2.png";
import p2b from "../images/p2-1.png";
import p3 from "../images/p3.png"; // example for project 3

const projects = [
  {
    id: 1,
    title: 'Tour Management',
    desc: 'MERN-based platform for booking & managing tours with OTP-based email verification, JWT authentication, and admin dashboard. Backend deployed on Render, frontend on Vercel.',
    tech: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
    github: 'https://github.com/Zatakiya2510/Travel-World',
    live: 'https://travel-frontend-tau-eight.vercel.app/home',
    img: p1,
  },

  {
    id: 2,
    title: 'Diabetes Prediction',
    desc: 'Machine Learning web app using Random Forest and 6 other algorithms for disease prediction. Flask backend with interactive Bootstrap UI design. Deployed on Render.',
    tech: ['Python', 'Scikit-learn', 'Flask', 'Bootstrap'],
    github: 'https://github.com/Zatakiya2510/health',
    live: 'https://healthp.onrender.com/login',
    images: [p2a, p2b]   // ✅ works
  },

  {
    id: 3,
    title: 'Coffee Shop Management',
    desc: 'ASP.NET based management system with authentication, billing, and order management. Includes SQL database tables and responsive Bootstrap UI.',
    tech: ['ASP.NET', 'C#', 'SQL', 'Bootstrap'],
    github: 'https://github.com/Zatakiya2510/Coffee-Shop',
    img: p3,
  }
];

export default projects;
