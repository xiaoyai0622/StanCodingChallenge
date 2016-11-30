import { connect } from 'react-redux'
import { fetchMovie } from '../modules/movies'



import Counter from '../components/Movies'

const mapDispatchToProps = {
  fetchMovie
}

const mapStateToProps = (state) => ({
  movies : state.movies
})



export default connect(mapStateToProps, mapDispatchToProps)(Counter)
