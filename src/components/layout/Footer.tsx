import React from 'react';
import { Logo } from './Logo';
import { Input } from '../ui/Input';
import { GoldButton } from '../ui/GoldButton';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' }
];

export function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gold-500/60 text-sm">
              AI-powered credit card recommendations tailored to your lifestyle
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gold-500/60 hover:text-gold-500">About Us</a></li>
              <li><a href="#" className="text-gold-500/60 hover:text-gold-500">Careers</a></li>
              <li><a href="#" className="text-gold-500/60 hover:text-gold-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gold-500/60 hover:text-gold-500">Blog</a></li>
              <li><a href="#" className="text-gold-500/60 hover:text-gold-500">FAQs</a></li>
              <li><a href="#" className="text-gold-500/60 hover:text-gold-500">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Newsletter</h3>
            <p className="text-gold-500/60 text-sm mb-4">
              Stay updated with the latest in credit card rewards
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-dark-800"
              />
              <GoldButton type="submit">
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </GoldButton>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gold-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gold-500/60 text-sm">
            © {new Date().getFullYear()} MaxxMAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gold-500/60 hover:text-gold-500 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}