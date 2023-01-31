import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../utility.css'
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


//https://api.themoviedb.org/3/movie/upcoming?api_key=dee5beeb7c4ab8309d44634ae7e14f01
const Home = () => {

  const [carouselData, setCarouselData] = useState([])

  const [data, setData] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=dee5beeb7c4ab8309d44634ae7e14f01')
      .then((data) => data.json())
      .then((data) => setCarouselData(data.results))
  }, [])


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=dee5beeb7c4ab8309d44634ae7e14f01')
      .then((data) => data.json())
      .then((data) => setData(data.results))
  }, [])


  return (
    <>
      <Header />
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        showStatus={false}>
        {
          loading
            ?
            <div
              className='sm:mx-24 mt-7 relative'>
              <div className='lg:h-[700px] w-[100%]'>
                <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                  <Skeleton height={400} width={400} duration={2} />
                </SkeletonTheme>
              </div>
              <div
                className=' text-4xl mt-4 mb-7 text-pink-500'>
                <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                  <Skeleton height={20} duration={2} />
                </SkeletonTheme>
              </div>
            </div>
            :
            carouselData.map(movie => (
              <Link to={`/movie/${movie.id}`}>
                <div
                  className='sm:mx-24 mx-3 mt-10 relative'>
                  <img className='lg:h-[700px] lg:max-w-[1200px]' src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="" />
                  <div
                    className=' text-4xl mt-4 mb-7 text-pink-500'>
                    {movie ? movie.original_title : ''}
                  </div>
                </div>
              </Link>
            ))
        }
      </Carousel>
      <div
        className='sm:mx-24 text-4xl text-center text-stone-50 underline mt-20'>
        Now Playing
      </div>
      <div
        className='flex flex-wrap justify-evenly sm:pl-24 w-[100%] overflow-x-clip'>
        {
          data.map((item) => (
            <Card movieData={item} key={item.id} />
          ))
        }
      </div>
      <Footer />
    </>
  );
}

export default Home;
