import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../common/SearchBar'
import CityCard from '../common/CityCard'
import { getCities } from '../../state/actions'

const Home = props => {
  useEffect(() => {
    props.getCities()
  }, [])

  return (
    <section>
      <SearchBar />

      {props.cities.map(city => {
        return <CityCard key={city.id} city={city} />
      })}
    </section>
  )
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
  }
}

// export default Home

export default connect(mapStateToProps, { getCities })(Home)