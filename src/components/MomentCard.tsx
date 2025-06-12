
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, X } from 'lucide-react';

interface MomentCardProps {
  id: number;
  title: string;
  date: string;
  image: string;
  video?: string;
  description: string;
  category: string;
}

const MomentCard = ({ id, title, image, video }: MomentCardProps) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (video) {
      setIsVideoModalOpen(true);
    }
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <Link to={`/moment/${id}`}>
        <div className="group netflix-hover cursor-pointer">
          <div className="netflix-card aspect-[16/9] relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = '/src/assets/images/placeholder.jpg';
              }}
            />
            
            {/* Netflix-style hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Title overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-netflix-white font-bold text-sm md:text-base font-netflix line-clamp-2">
                {title}
              </h3>
            </div>

            {/* Play button on hover */}
            {video && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePlayClick}
                  className="w-12 h-12 bg-netflix-white/90 hover:bg-netflix-white rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <Play className="w-6 h-6 text-netflix-black ml-1" fill="currentColor" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Video Modal */}
      {isVideoModalOpen && video && (
        <div className="fixed inset-0 z-50 bg-netflix-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-netflix-white hover:text-netflix-lightGray transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              className="w-full rounded-sm"
              controls
              autoPlay
              src={video}
            >
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default MomentCard;
