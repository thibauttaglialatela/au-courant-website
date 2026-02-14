import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Loader from '../../components/Loader'

function Dashboard() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + 'api/me', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })

        if (!response.ok) {
          navigate('/login')
          return
        }

        if (loading) return <Loader />

        if (error) {
          return console.error('erreur')
        }

        const userData = await response.json()
        setUser(userData)
      } catch (err) {
        console.error(err)
        setError('Impossible de charger le profil')
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [navigate, error, loading])

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard</h1>
      <p>Bienvenu {user.username}</p>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Utilisateurs</h5>
              <p className="card-text">15 inscrits</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Projets</h5>
              <p className="card-text">8 projets actifs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
