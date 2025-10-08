import useApi from './utils/hooks/useApi'
import { useMemo } from 'react'

function App() {
  //appel de l'api
  const options = useMemo(() => ({}), [])

  const { loading, error, data, refetch } = useApi(
    'works/latest?limit=3&sort=end_date',
    options,
  )
  console.log(data)
  console.log(error)
  console.log(loading)
  return (
    <>
      <h1>Titre 1</h1>
      <h2>heading2</h2>
      <h3>titre 3</h3>
      <h4>titre 4</h4>
      <p>
        Lorem ipsum dolor sit <em>amet</em> consectetur adipisicing elit. Quos
        qui, iure iste ad, odio mollitia sapiente labore delectus cum possimus
        tempora neque? Commodi cum, pariatur at in vel
        <strong>explicabo doloremque?</strong>
      </p>
      <a href="#">lien</a>
      <ul>
        <li>liste1</li>
        <li>2</li>
      </ul>
      <button onClick={refetch}>Rafraichir la page</button>
    </>
  )
}

export default App
