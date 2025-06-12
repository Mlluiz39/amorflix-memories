
import { Heart } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo = ({ size = 'md', animated = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${animated ? 'animate-scale-in' : ''}`}>
      <Heart className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : 'w-12 h-12'} text-netflix-red`} fill="currentColor" />
      <h1 className={`${sizeClasses[size]} font-bold netflix-text tracking-tight font-netflix`}>
        VidocaFlix
      </h1>
    </div>
  );
};

export default Logo;
