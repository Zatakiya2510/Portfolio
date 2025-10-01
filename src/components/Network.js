import React from 'react';
import { FaGithub, FaLinkedinIn, FaHackerrank } from 'react-icons/fa';
import { ReactComponent as LeetCodeIcon } from '../images/leetcode-svgrepo-com.svg'; // Adjust the path accordingly
import'../styles/Network.css';
const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/Zatakiya2510',
    icon: FaGithub,
    color: '#333',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/zatakiya-abhishek-426087252/',
    icon: FaLinkedinIn,
    color: '#0A66C2',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/h22010101212',
    icon: FaHackerrank,
    color: '#2EC866',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/AbhiZatakiya/',
    icon: LeetCodeIcon,
    color: '#FFA116',
  },
];

export default function Network() {
  return (
    <section
      id="network"
      className="network-section section container flex flex-col items-center justify-center text-center py-16"
    >
      <h2 className="network-title text-4xl md:text-5xl font-extrabold mb-12 text-[var(--accent)]">
        Let’s Connect 🌐
      </h2>

      <div className="network-icons flex gap-8 md:gap-12">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="network-icon"
              style={{ borderColor: link.color }}
              title={link.name}
            >
              <Icon size={48} color={link.color} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
