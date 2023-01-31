import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Btt from '../components/Btt';

const TopRated = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((data) => data.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <Header />
      <Btt />
        <div
          className='sm:mx-24 text-4xl text-center text-stone-50 underline mt-20'>
          Top Rated
        </div>
        <div
          className='flex flex-wrap justify-evenly w-[100%] overflow-x-clip'>

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

export default TopRated;
