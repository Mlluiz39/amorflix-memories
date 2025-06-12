
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const autoRedirect = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoRedirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-netflix-black relative overflow-hidden">
      {/* Netflix-style loading animation */}
      <div className="absolute inset-0 bg-netflix-black">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-netflix-red rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <Logo size="lg" animated={true} />
        
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-xl text-netflix-white mb-8 font-netflix">Uma experiência cinematográfica do nosso amor</p>
          
          {/* Netflix-style loading dots */}
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-netflix-red rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-netflix-red rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-netflix-red rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 text-center text-netflix-lightGray text-sm font-netflix">
        <p>Carregando momentos especiais...</p>
      </div>
    </div>
  );
};

export default Landing;
