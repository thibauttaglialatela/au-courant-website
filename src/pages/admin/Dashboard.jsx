function Dashboard() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard</h1>

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
