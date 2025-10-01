import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import '../styles/Footer.css';

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/Zatakiya2510', name: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/zatakiya-abhishek-426087252/', name: 'LinkedIn' },
  { icon: FaHackerrank, url: 'https://www.hackerrank.com/profile/h22010101212', name: 'HackerRank' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Motivational Quote */}
        <p className="footer-quote">
          “Code is not just lines, it’s dedication, passion, and the drive to solve real problems.” 💻
        </p>

        {/* Social Links */}
        <div className="footer-social">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                title={link.name}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          © {new Date().getFullYear()} Abhishek Zatakiya —{' '}
          <a href="https://github.com/Zatakiya2510" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
