// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const ActionMoviesList = moviesList.filter(
    Movie => Movie.categoryId === actionMovie,
  )

  const ComedyMoviesList = moviesList.filter(
    Movie => Movie.categoryId === comedyMovie,
  )

  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={ActionMoviesList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={ComedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
