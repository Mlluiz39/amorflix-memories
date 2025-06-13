import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Bell, User, Play, X } from 'lucide-react'
import { moments } from '../data/moments'
import MomentCard from '../components/MomentCard'
import Logo from '../components/Logo'

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const featuredMoment = moments[0]

  const filteredMoments = moments.filter(
    moment =>
      moment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      moment.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleWatchClick = () => {
    const videoMoment = moments.find(moment => moment.id === featuredMoment.id)
    if (videoMoment && videoMoment.video) {
      // If the moment has a video, open the modal
      openVideoModal()
    } else {
      // If no video is available, you can handle it accordingly
      console.warn('No video available for this moment.')
    }
  }
  const openVideoModal = () => {
    // Open the video modal
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-netflix-black text-netflix-white">
      {/* Netflix Header */}
      <header className="fixed top-0 left-0 right-0 z-40 netflix-header">
        <div className="px-4 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Logo size="sm" animated={false} />
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/catalog"
                  className="text-netflix-white hover:text-netflix-lightGray transition-colors font-netflix"
                >
                  Início
                </Link>
                <Link
                  to="/catalog"
                  className="text-netflix-lightGray hover:text-netflix-white transition-colors font-netflix"
                >
                  Meus Momentos
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-netflix-lightGray w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar momentos..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="bg-netflix-dark border border-netflix-gray text-netflix-white placeholder-netflix-lightGray pl-10 pr-4 py-2 rounded-sm focus:outline-none focus:border-netflix-white transition-colors font-netflix"
                />
              </div>
              <Bell className="w-6 h-6 text-netflix-white hover:text-netflix-lightGray cursor-pointer transition-colors" />
              <User className="w-8 h-8 text-netflix-white hover:text-netflix-lightGray cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[80vh] mt-16 md:mt-20">
        <div className="absolute inset-0">
          <img
            src={featuredMoment.image}
            alt={featuredMoment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex items-center h-full px-4 md:px-12">
          <div className="max-w-2xl">
            <div className="inline-block bg-netflix-red text-netflix-white px-3 py-1 rounded-sm text-sm font-bold mb-4 font-netflix">
              {featuredMoment.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-netflix-white mb-4 animate-fade-in font-netflix">
              {featuredMoment.title}
            </h1>
            <p className="text-lg md:text-xl text-netflix-white leading-relaxed mb-8 font-netflix">
              {featuredMoment.description}
            </p>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleWatchClick}
                className="bg-netflix-white text-netflix-black px-8 py-3 rounded-sm font-bold text-lg hover:bg-netflix-lightGray transition-colors font-netflix flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Assistir
              </button>

              <Link
                to={`/moment/${featuredMoment.id}`}
                className="bg-netflix-gray/70 text-netflix-white px-8 py-3 rounded-sm font-bold text-lg hover:bg-netflix-gray transition-colors font-netflix"
              >
                Mais informações
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-netflix-black/90 flex items-center justify-center">
          <div className="relative w-full max-w-full md:max-w-4xl mx-4">
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
              src="/src/videos/video-especial.mp4"
            >
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      )}

      {/* Content Sections */}
      <section className="px-4 md:px-12 py-12 space-y-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-6 font-netflix">
            Nossos Momentos Especiais
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredMoments.map(moment => (
              <MomentCard key={moment.id} {...moment} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-6 font-netflix">
            Momentos Românticos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {moments
              .filter(moment => moment.category === 'Romântico')
              .map(moment => (
                <MomentCard key={moment.id} {...moment} />
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-6 font-netflix">
            Aventuras Juntos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {moments
              .filter(
                moment =>
                  moment.category === 'Aventura' || moment.category === 'Viagem'
              )
              .map(moment => (
                <MomentCard key={moment.id} {...moment} />
              ))}
          </div>
        </div>
      </section>

      {/* <AudioPlayer /> */}
    </div>
  )
}

export default Catalog
