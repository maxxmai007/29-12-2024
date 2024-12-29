import { ArrowUpRight, Globe, Shield, BarChart3 } from 'lucide-react';

export const FEATURES = [
  {
    icon: <ArrowUpRight className="w-6 h-6 text-gold-500" />,
    title: 'Seamless Integration',
    description: 'Our platform integrates easily with your existing financial profile.'
  },
  {
    icon: <Globe className="w-6 h-6 text-gold-500" />,
    title: 'Global Coverage',
    description: 'Access credit card recommendations from providers worldwide.'
  },
  {
    icon: <Shield className="w-6 h-6 text-gold-500" />,
    title: 'Secure and Trustworthy',
    description: 'Your data is safeguarded by industry-leading security protocols.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-gold-500" />,
    title: 'Real-Time Analytics',
    description: 'Access detailed insights to optimize your credit card choices.'
  }
] as const;