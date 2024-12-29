import React from 'react';
import { CreditCard, Search, CheckCircle2, Brain } from 'lucide-react';

const steps = [
  { icon: Search, text: "Scanning credit card database..." },
  { icon: Brain, text: "Analyzing your spending patterns..." },
  { icon: CheckCircle2, text: "Finding your perfect matches..." }
];

export function LoadingAnimation() {
  const [currentStep, setCurrentStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[400px] w-full">
      {/* Floating credit cards background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <CreditCard 
              className="w-12 h-12 text-gold-500/20" 
              style={{ 
                filter: 'blur(1px)',
                transform: `scale(${0.8 + Math.random() * 0.4})` 
              }} 
            />
          </div>
        ))}
      </div>

      {/* Central loading animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10 bg-dark-900/80 p-8 rounded-lg backdrop-blur-sm border border-gold-500/20">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4">
                <CreditCard className="w-full h-full text-gold-500" />
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4">
                <CreditCard className="w-full h-full text-gold-500/80" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4">
                <CreditCard className="w-full h-full text-gold-500/60" />
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4">
                <CreditCard className="w-full h-full text-gold-500/40" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              {React.createElement(steps[currentStep].icon, {
                className: "w-8 h-8 text-gold-500 animate-pulse"
              })}
            </div>
          </div>
          <p className="text-gold-500 animate-pulse">
            {steps[currentStep].text}
          </p>
        </div>
      </div>
    </div>
  );
}