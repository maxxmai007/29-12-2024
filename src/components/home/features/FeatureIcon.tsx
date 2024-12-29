import React from 'react';
import { Brain, Shield, Zap, Target } from 'lucide-react';

interface FeatureIconProps {
  type: 'brain' | 'shield' | 'zap' | 'target';
}

export function FeatureIcon({ type }: FeatureIconProps) {
  const iconProps = {
    className: "w-6 h-6 text-gold-500"
  };

  switch (type) {
    case 'brain':
      return <Brain {...iconProps} />;
    case 'shield':
      return <Shield {...iconProps} />;
    case 'zap':
      return <Zap {...iconProps} />;
    case 'target':
      return <Target {...iconProps} />;
  }
}