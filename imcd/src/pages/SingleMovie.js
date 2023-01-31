import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const SingleMovie = () => {

  let { id } = useParams()

  const [singleMovieData, setSingleMovieData] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dee5beeb7c4ab8309d44634ae7e14f01`)
      .then((data) => data.json())
      .then((data) => setSingleMovieData(data))
  }, [id]);

  return (
    <>
      <Header />
      <div>
        {singleMovieData.original_title}
        {singleMovieData.backdrop_path}
        {singleMovieData.poster_path}
        {singleMovieData.overview}
        {singleMovieData.release_date}
        {singleMovieData.runtime}
        {singleMovieData.tagline}
        {singleMovieData.vote_average}
        {singleMovieData.vote_count}
      </div>
    </>
  );
}

export default SingleMovie;
