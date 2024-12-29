import React from 'react';
import { NetworkGraph } from '../graphs/NetworkGraph';
import { Timeline } from '../timeline/Timeline';
import { NotificationCard } from './NotificationCard';

const features = [
  {
    title: 'Thousands of Cards',
    description: 'We analyze the benefits of 4,000+ credit cards and key issuers daily',
    content: <NetworkGraph />
  },
  {
    title: 'Hyper Personalization',
    description: 'We match your goals and spending to the right card, at the right time',
    content: <NotificationCard />
  },
  {
    title: 'Your Partner Over Time',
    description: 'We optimize your rewards, so you never think twice about your cards',
    content: <Timeline />
  }
];

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group relative rounded-2xl p-8 bg-gradient-to-b from-dark-800/50 to-dark-900/50 border border-gold-500/10 hover:border-gold-500/20 transition-all duration-300"
        >
          <div className="aspect-[4/3] mb-8 rounded-lg overflow-hidden bg-dark-900/80 border border-gold-500/5">
            {feature.content}
          </div>
          
          <h4 className="text-xl text-white mb-3 font-montserrat">
            {feature.title}
          </h4>
          
          <p className="text-gold-500/80 text-sm leading-relaxed font-montserrat">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}