import React from 'react';
import { Link } from 'react-router-dom';


const Analytics: React.FC = () => {
  return (
    <div className='w-full  py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
       
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <Link to='/auth/signin' >
          <button className='bg-meta-4 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'
          >Get Started</button>
          </Link>
        </div>
        <img className='w-[500px] mx-auto my-4' src='src\images\logo\Cyber attack-bro.png' alt='/' />
      </div>
    </div>
  );
};

export default Analytics;
