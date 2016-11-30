import React from 'react'
import Tile from '../../../components/Tile'
import Title from '../../../components/Title'
import './Movie.scss'
class Movies extends React.Component {

  componentWillMount() {
    this.props.fetchMovie();
  }

  render() {

    if (this.props.movies) {
      return (
        <div>
          <Title title="Popular Movies"/>
          <div className="movie-list">

            {this.props.movies.movieList.map(function (movie) {
              
              return (  <Tile title={movie.title} img={movie.images['Poster Art'].url}/>)
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="movie-list">
          <Title title="Popular Titles"/>
          <h2>Loading</h2>
        </div>
      );
    }

  }
}


export default Movies
