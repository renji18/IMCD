import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const TopRated = () => {

  const [data, setData] = useState([])

  // https://image.tmdb.org/t/p/original/{{ imagePath }}

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=dee5beeb7c4ab8309d44634ae7e14f01')
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

export default TopRated;
