import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, Heart } from 'lucide-react'
import Logo from '../components/Logo'
import { toast } from 'sonner'

const Login = () => {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const secretCode = '2608'

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simula um delay de autenticação
    await new Promise(resolve => setTimeout(resolve, 1500))

    if (code === secretCode) {
      toast.success('Bem-vinda ao nosso mundo especial! ❤️')
      navigate('/catalog')
    } else {
      toast.error('Código incorreto. Tente novamente!')
      setCode('')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-netflix-black px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="md" animated={true} />
          <p className="text-netflix-lightGray mt-4 text-lg font-netflix">
            Entre no nosso cinema pessoal
          </p>
        </div>

        <div className="bg-netflix-dark/90 p-8 rounded-sm animate-scale-in">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-netflix-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-netflix-red" />
            </div>
            <h2 className="text-2xl font-bold text-netflix-white mb-2 font-netflix">
              Acesso Privado
            </h2>
            <p className="text-netflix-lightGray font-netflix">
              Digite o código secreto que representa nosso amor
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                placeholder="Código secreto"
                value={code}
                onChange={e => setCode(e.target.value)}
                className="w-full px-4 py-3 bg-netflix-gray border border-netflix-lightGray rounded-sm text-netflix-white placeholder-netflix-lightGray focus:outline-none focus:border-netflix-white transition-all font-netflix"
                maxLength={4}
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || code.length < 3}
              className="w-full bg-netflix-red hover:bg-netflix-red/90 disabled:bg-netflix-red/50 text-netflix-white font-bold py-3 rounded-sm transition-all duration-300 flex items-center justify-center space-x-2 font-netflix"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-netflix-white border-t-transparent"></div>
              ) : (
                <>
                  <Heart className="w-5 h-5" fill="currentColor" />
                  <span>Entrar no AmorFlix</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-netflix-lightGray text-sm font-netflix">
              Dica: O número que representa "nossa data especial"
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/catalog')}
            className="text-netflix-lightGray hover:text-netflix-white text-sm underline transition-colors font-netflix"
          >
            Pular login (modo demo)
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
