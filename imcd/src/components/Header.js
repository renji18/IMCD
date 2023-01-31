import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../utility.css'
import logo from '../images/—Pngtree—vector material download_1419602.png'

const Header = () => {
  return (
    <Fragment>
      <div
        className='title_bar'>
        <img className='logo' src={logo} alt="" />
        <span className='logo_text'>IMCD</span>
      </div>
      <div
        className='bg-emerald-700/30 z-50 text-white rounded-xl text-center sm:pt-32 grid space-y-3 py-3 border-y-[1px] text-xl md:text-2xl sm:fixed sm:w-20 sm:grid sm:left-0 sm:top-32 sm:bottom-32'>
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