import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import Loader from '../Loader/index'

function ProtectedRoute() {
  const [loading, setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const authUser = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + 'api/me', {
          credentials: 'include',
        })
        setIsAuth(response.ok)
      } catch {
        setIsAuth(false)
      } finally {
        setLoading(false)
      }
    }
    authUser()
  }, [])
  if (loading) {
    return <Loader />
  }
  if (!isAuth) return <Navigate to="/login" replace />
  return <Outlet />
}

export default ProtectedRoute
