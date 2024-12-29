import React from 'react';
import { Shield, Zap, Brain } from 'lucide-react';
import { MotionDiv } from '../ui/motion';

const features = [
  {
    icon: Shield,
    title: 'Smart Security',
    description: 'Advanced AI algorithms ensure your financial data is analyzed securely and privately'
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'Get personalized credit card recommendations in seconds based on your profile'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Our AI learns from thousands of data points to find your perfect credit card match'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-white mb-4">Why Choose MaxxMAI</h2>
          <p className="text-gold-500/80">Discover how we make credit card selection smarter</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-dark-800/50 border border-gold-500/10 hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-gold-500/80">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}