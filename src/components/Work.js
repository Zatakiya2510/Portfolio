import React, { useEffect } from "react";
import projects from "../data/projects";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPython, SiFlask, SiBootstrap, SiDotnet } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Work.css";

export default function Work() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-down");
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

  const techIconMap = {
    MongoDB: SiMongodb,
    Express: SiExpress,
    React: SiReact,
    Node: SiNodedotjs,
    JWT: SiNodedotjs,
    Python: SiPython,
    Flask: SiFlask,
    Bootstrap: SiBootstrap,
    "ASP.NET": SiDotnet,
  };

  return (
    <section id="work" className="section container">
      <h2 className="text-3xl font-bold mb-10 text-center text-[var(--accent)]">My Work</h2>

      <div className="projects-grid flex flex-col gap-12">
        {projects.map((p) => (
          <div key={p.id} className="card fade-down">
            
            {/* 🔥 If project has multiple images → show Swiper */}
            {p.images ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg"
              >
                {p.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${p.title}-${idx}`}
                      className="w-full h-72 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img src={p.img} alt={p.title} className="w-full h-72 object-cover" />
            )}

            <div className="card-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tech-tags">
                {p.tech.map((t, idx) => {
                  const Icon = techIconMap[t];
                  return (
                    <div key={idx}>
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{t}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-col md:flex-row">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn mb-4 md:mb-0 md:mr-6 px-6 py-3 font-semibold rounded-lg text-white border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-pink-500 hover:via-red-500 hover:to-orange-500"
                  >
                    Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn px-6 py-3 font-semibold rounded-lg text-white border-2 border-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
