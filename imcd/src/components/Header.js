import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../utility.css'
import logo from '../images/—Pngtree—vector material download_1419602.png'

const Header = () => {
  return (
    <Fragment>
      <div
        className='title_bar flex justify-center sticky top-0'>
        <img className='sm:w-[100px] w-[80px]' src={logo} alt="" />
        <span className='logo_text md:text-[40px] md:font-medium text-[34px] flex items-center'>IMCD</span>
      </div>
      <div
        className='navbar_main z-50 mx-3 text-black mt-3 rounded-xl text-center sm:pt-32 grid space-y-2 py-2 border-y-[1px] text-xl md:text-2xl sm:fixed sm:w-20 sm:grid sm:left-0 sm:top-32 sm:bottom-32'>
        <NavLink to='/'>Home</NavLink>
        <hr />
        <NavLink to='/movie/latest'>Latest</NavLink>
        <hr />
        <NavLink to='/movie/top_rated'>Top Rated</NavLink>
      </div>
    </Fragment>
  );
}

export default Header;