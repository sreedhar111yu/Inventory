// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const divStyle = {
  backgroundImage: 'url("https://pbs.twimg.com/profile_banners/14637048/1448631888/1500x500")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '10vh', // 100% of the viewport height
};

function Home() {
  return (
    <>
      <div className='flex w-full scroll-m-4'>
        <div className='w-1/6'></div>
        <div className='w-full py-20 px-8 '>
          <div className='flex' style={divStyle}>
            <div className=' px-5 py-11'>
              <Link className='font-semibold text-lg underline' to='/*/dashboard'>
                DashBoard
              </Link>
            </div>

            <div className='px-5 py-11 '>
              <Link className='font-semibold text-lg underline' to='#'>
                Getting Started
              </Link>
            </div>

            <div className='px-5 py-11 '>
              <Link className='font-semibold text-lg underline' to='#'>
                Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
