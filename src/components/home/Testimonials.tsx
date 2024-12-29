import React from 'react';
import { MotionDiv } from '../ui/motion';
import '../../styles/gold-text.css';

const testimonials = [
  {
    quote: "MaxxMAI helped me find the perfect travel rewards card. I've already saved thousands on flights!",
    author: "Sukina Shetty",
    role: "Travel Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
  },
  {
    quote: "The AI-powered recommendations were spot-on. Finally found a card that matches my spending habits.",
    author: "Manu Kapoor",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
  },
  {
    quote: "Incredible how quickly I got personalized card recommendations. The process was seamless!",
    author: "Rohini T.",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-1 h-1 rounded-full gold-gradient-button" />
            <h2 className="gold-gradient-text gold-shimmer text-sm font-medium tracking-wide uppercase font-montserrat">
              WHAT OUR USERS SAY
            </h2>
            <div className="w-1 h-1 rounded-full gold-gradient-button" />
          </div>
          
          <h3 className="text-4xl md:text-5xl font-display font-montserrat">
            <span className="text-white block">Join thousands of satisfied users</span>
            <span className="gold-gradient-text gold-shimmer" data-text="who found their perfect card">who found their perfect card</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-900/50 p-6 rounded-2xl border border-gold-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium font-montserrat">{testimonial.author}</p>
                  <p className="text-sm text-[#B08D57] font-montserrat">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#B08D57] font-montserrat italic opacity-90">{testimonial.quote}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}