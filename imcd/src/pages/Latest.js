import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../utility.css'

const Latest = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=dee5beeb7c4ab8309d44634ae7e14f01')
      .then((data) => data.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <Header />
      <div
        className='sm:mx-24 text-4xl text-center text-stone-50 underline mt-20'>
        Latest
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

export default Latest;
