import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Card = ({ movieData }) => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return <>
    {
      loading
        ?
        <div className='mt-7 mx-10'>
          <div className='w-[140px] hover:w-[160px] hover:z-50'>
            <SkeletonTheme baseColor='#202020' highlightColor='#444'>
              <Skeleton height={200} duration={2} />
            </SkeletonTheme>
          </div>
          <div
            className='break-words text-center mt-1 mb-2 text-emerald-500 text-xl max-w-[140px]'>
            <SkeletonTheme baseColor='#202020' highlightColor='#444'>
              <Skeleton height={40} duration={2} />
            </SkeletonTheme>
          </div>
        </div>
        :
        <Link to={`/movie/${movieData ? movieData.id : ''}`}>
          <div className='mt-7 mx-10'>
            <img className='w-[140px] hover:w-[160px] hover:z-50' src={`https://image.tmdb.org/t/p/original/${movieData && movieData.poster_path}`} alt="" />
            <div
              className='break-words text-center mt-1 mb-2 text-emerald-500 text-xl max-w-[140px]'>
              movieData.original_title
            </div>
          </div>
        </Link>
    }
  </>
}

export default Card;
