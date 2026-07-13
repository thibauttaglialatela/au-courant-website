import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Loader from '../../components/Loader'
import Navbar from '../../components/admin/Navbar'
import { useMemo } from 'react'
import useApi from '../../utils/hooks/useApi'

function Dashboard() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState([])
  const options = useMemo(() => ({}), [])
  const {
    loading: loadingPrestations,
    error: errorPrestations,
    data: dataPrestations,
  } = useApi('api/admin/prestations', options)

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
  }, [navigate])

  if (error) return <div className="alert alert-danger m-3">{error}</div>
  if (errorPrestations)
    return (
      <div className="alert alert-danger m-3">Erreur : {errorPrestations}</div>
    )

  if (loading) return <Loader />

  return (
    <section className="container-fluid min-vh-100 d-flex flex-column bg-light">
      <section className="row flex-grow-1">
        <aside className="col-12 col-md-3 col-lg-2 bg-light border-end p-0">
          <Navbar />
        </aside>
        <main className="col-12 col-md-9 col-lg-10 p-4 d-flex flex-column min-vh-100">
          <h1 className="text-center text-decoration-underline">Prestations</h1>
          {user && (
            <span className="badge bg-secondary mx-auto mb-3">
              Connecté : {user.username}
            </span>
          )}

          {loadingPrestations ? (
            <Loader />
          ) : (
            <section className="table-responsive w-75 shadow-sm rounded bg-white p-3 mx-auto my-auto">
              <table className="table table-striped m-0 align-middle">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nom</th>
                    <th scope="col">tarif (€)</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPrestations.map((prestation, index) => (
                    <tr key={index}>
                      <td>{prestation.id}</td>
                      <td>{prestation.name}</td>
                      <td>{prestation.tarif}</td>
                      <td className="d-flex flex-row justify-content-evenly">
                        <a href="" className="btn btn-outline-warning">
                          Modifier
                        </a>
                        <a href="#" className="btn btn-danger">
                          Supprimer
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </main>
      </section>
    </section>
  )
}

export default Dashboard
