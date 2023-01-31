import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Btt from '../components/Btt';
import '../utility.css'

const Latest = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
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
        Latest
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

export default Latest;
