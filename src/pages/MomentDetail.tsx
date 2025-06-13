import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Heart,
  Play,
  Share2,
  Plus,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react'
import { moments } from '../data/moments'
import AudioPlayer from '../components/AudioPlayer'
import { toast } from 'sonner'

const MomentDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const moment = moments.find(m => m.id === Number(id))

  useEffect(() => {
    if (!moment) {
      navigate('/catalog')
    }
  }, [moment, navigate])

  if (!moment) return null

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: moment.title,
        text: moment.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast.success('Link copiado para a área de transferência!')
    }
  }

  const handlePlayClick = () => {
    if (moment.video && videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 netflix-header">
        <div className="px-4 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/catalog')}
              className="flex items-center space-x-2 text-netflix-white hover:text-netflix-lightGray transition-colors font-netflix"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mt-16 md:mt-20">
        <div className="relative w-full pt-[56.25%] bg-black">
          {moment.video ? (
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-contain"
              poster={moment.image}
              controls
              preload="auto"
              playsInline
            >
              <source src={moment.video} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          ) : (
            <img
              src={moment.image}
              alt={moment.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          )}
        </div>

        {/* Texto e botões */}
        <div className="p-6 md:p-12">
          <div className="max-w-3xl">
            <div className="inline-block bg-netflix-red text-netflix-white px-3 py-1 rounded-sm text-sm font-bold mb-4 font-netflix">
              {moment.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-netflix-white mb-4 font-netflix">
              {moment.title}
            </h1>
            <p className="text-xl text-netflix-white leading-relaxed mb-6 font-netflix">
              {moment.description}
            </p>

            {/* Ações */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePlayClick}
                className="bg-netflix-white text-netflix-black px-8 py-3 rounded-sm font-bold text-lg hover:bg-netflix-lightGray transition-colors font-netflix flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Reproduzir
              </button>

              <button className="w-12 h-12 bg-netflix-gray/70 hover:bg-netflix-gray rounded-full flex items-center justify-center transition-colors">
                <Plus className="w-6 h-6 text-netflix-white" />
              </button>
              <button className="w-12 h-12 bg-netflix-gray/70 hover:bg-netflix-gray rounded-full flex items-center justify-center transition-colors">
                <ThumbsUp className="w-6 h-6 text-netflix-white" />
              </button>
              <button className="w-12 h-12 bg-netflix-gray/70 hover:bg-netflix-gray rounded-full flex items-center justify-center transition-colors">
                <ThumbsDown className="w-6 h-6 text-netflix-white" />
              </button>
              <button
                onClick={handleShare}
                className="w-12 h-12 bg-netflix-gray/70 hover:bg-netflix-gray rounded-full flex items-center justify-center transition-colors"
              >
                <Share2 className="w-6 h-6 text-netflix-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo detalhado */}
      <section className="px-4 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Texto principal */}
          <div className="md:col-span-2">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-netflix-white text-lg mb-2 font-netflix">
                  {moment.date}
                </p>
                <div className="text-netflix-lightGray text-sm font-netflix">
                  {moment.category}
                </div>
              </div>
            </div>

            <p className="text-netflix-white leading-relaxed text-lg mb-8 font-netflix">
              {moment.details}
            </p>

            {moment.audio && (
              <div className="bg-netflix-dark rounded-sm p-6 mb-8">
                <h3 className="text-netflix-white font-bold mb-4 font-netflix">
                  Áudio Especial
                </h3>
                <audio controls className="w-full">
                  <source src={moment.audio} type="audio/mpeg" />
                  Seu navegador não suporta áudio.
                </audio>
              </div>
            )}
          </div>

          {/* Lateral */}
          <div className="space-y-8">
            <div className="bg-netflix-dark rounded-sm p-6 text-center">
              <Heart
                className="w-12 h-12 text-netflix-red mx-auto mb-4"
                fill="currentColor"
              />
              <blockquote className="text-lg text-netflix-white leading-relaxed font-netflix italic">
                "{moment.romanticComment}"
              </blockquote>
            </div>

            <div>
              <h3 className="text-netflix-white font-bold text-xl mb-4 font-netflix">
                Mais como este
              </h3>
              <div className="space-y-4">
                {moments
                  .filter(m => m.id !== moment.id)
                  .slice(0, 3)
                  .map(relatedMoment => (
                    <button
                      key={relatedMoment.id}
                      onClick={() => navigate(`/moment/${relatedMoment.id}`)}
                      className="w-full bg-netflix-dark hover:bg-netflix-gray transition-colors rounded-sm p-4 text-left"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={relatedMoment.image}
                          alt={relatedMoment.title}
                          className="w-24 h-16 object-cover rounded-sm flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-netflix-white font-bold text-sm mb-1 font-netflix truncate">
                            {relatedMoment.title}
                          </h4>
                          <p className="text-netflix-lightGray text-xs font-netflix line-clamp-2">
                            {relatedMoment.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudioPlayer />
    </div>
  )
}

export default MomentDetail
