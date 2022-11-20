import Head from 'next/head'
import FamousPlaces from '../components/FamousPlaces'
import SearchBox from '../components/SearchBox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Météo</title>
      </Head>

      <div className="home">
        <div className="container">
          <SearchBox placeholder="Rechercher un autre emplacement..." />
          <FamousPlaces />
        </div>
      </div>
    </div>
  )
}
