import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

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
        className='flex flex-wrap justify-evenly pl-24 w-[100%] overflow-x-clip'>
        {
          data.map((item) => (
            <Card movieData={item} key={item.id} />
          ))
        }
      </div>
    </>
  );
}

export default Latest;
