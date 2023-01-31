import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Btt from '../components/Btt';

const SingleMovie = () => {

  let { id } = useParams()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  const [singleMovieData, setSingleMovieData] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((data) => data.json())
      .then((data) => setSingleMovieData(data))
  }, [id]);

  return (
    <>
      <Header />
      <Btt />
      {
        loading
          ?
          <div
            className='sm:mx-24 h-[100vh] mx-5 lg:mx-[250px] mt-7 relative'>
            <div>
              <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                <Skeleton height={188} width={335} duration={2} />
              </SkeletonTheme>
            </div>
            <div
              className='text-center lg:mt-7 text-3xl mt-3'>
              <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                <Skeleton duration={2} />
              </SkeletonTheme>
            </div>
            <div
              className='flex justify-evenly'>
              <div className='w-[100px] mt-20 md:w-[140px]'>
                <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                  <Skeleton height={150} width={100} duration={2} />
                </SkeletonTheme>
              </div>
              <span
                className='w-[140px] flex text-center mt-10 items-center text-xl font-semibold'>
                <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                  <Skeleton duration={2} />
                </SkeletonTheme>
              </span>
            </div>
            <div
              className='text-center mt-5 text-lg font-medium'>
              <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                <Skeleton duration={2} />
              </SkeletonTheme>
            </div>
          </div>
          :
          <div
            className='sm:mx-24 mx-5 lg:mx-[250px] mt-7 relative'>
            <div>
              <img src={`https://image.tmdb.org/t/p/original/${singleMovieData && singleMovieData.backdrop_path}`} alt="" />
            </div>
            <div
              className='text-center lg:mt-7 text-zinc-50 text-3xl mt-3'>
              {singleMovieData.original_title}
            </div>
            <div
              className='flex justify-evenly'>
              <img className='w-[100px] mt-20 md:w-[140px]' src={`https://image.tmdb.org/t/p/original/${singleMovieData && singleMovieData.poster_path}`} alt="" />
              <span
                className='w-[140px] text-zinc-50 md:w-[230px] lg:w-auto flex text-center mt-10 items-center text-xl font-semibold'>
                {singleMovieData.tagline || singleMovieData.original_title}
              </span>
            </div>
            <div
              className='text-center mt-6 text-zinc-50 text-lg font-medium'>
              {singleMovieData.overview}
            </div>
          </div>
      }
      <Footer />
    </>
  );
}

export default SingleMovie;
