import React from 'react';
import { cn } from '../../utils/cn';
import { smoothScroll } from '../../utils/scroll';
import '../../styles/gold-text.css';

const navItems = [
  { label: 'Why Us?', href: 'what-we-do' },
  { label: 'How It Works', href: 'how-it-works' },
  { label: 'What Our Users Say', href: 'testimonials' },
];

export function NavigationRibbon() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScroll(href);
  };

  return (
    <nav className="relative px-6 py-1.5 rounded-full bg-gradient-to-r from-earth-tan-dark/20 via-earth-tan/10 to-earth-tan-dark/20 backdrop-blur-sm border border-gold-500/10">
      <div className="flex items-center justify-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.href}`}
            onClick={(e) => handleClick(e, item.href)}
            className="gold-gradient-text gold-shimmer text-sm font-medium font-montserrat transition-all duration-300 hover:scale-105"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}