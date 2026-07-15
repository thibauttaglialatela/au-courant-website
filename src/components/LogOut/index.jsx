import { useNavigate } from 'react-router'

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear()
    navigate('/login')
  }

  return (
    <a href="" onClick={handleLogout} className="btn btn-danger">
      Se déconnecter
    </a>
  )
}

export default Logout
