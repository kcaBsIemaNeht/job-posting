import React, { useState } from 'react';
import jsonData from '../data.json';

interface JobData {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<string>;
  tools?: Array<string>;
}

function Card() {
  const [jobs] = useState<JobData[]>(jsonData);

  const lenguagesHandler = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.textContent);
  };
  function renderJobs() {
    return jobs.map((job) => (
      <div
        key={job.id}
        className={`flex flex-col md:flex-row md:justify-between bg-white p-4 hover:scale-105 transition-all rounded-lg shadow-xl  ${
          job.featured ? 'border-darkCyan border-l-4  ' : 'border-gray-200'
        } `}
      >
        <div className='md:grid md:auto-cols-auto md:gap-x-4  md:auto-rows-auto md:items-center '>
          <img
            src={job.logo}
            alt={job.company}
            className='w-20 h-20 row-span-3  justify-self-center'
          />
          <div className='flex  gap-4   items-center'>
            <span className='flex gap-4 '>
              <span className='inline  text-darkCyan font-bold'>
                {job.company}
              </span>
              {job.new ? (
                <span className='bg-darkCyan text-white rounded-full px-3 py-0.5 font-bold uppercase '>
                  New!
                </span>
              ) : null}
              {job.featured ? (
                <span className='bg-veryDark text-white rounded-full px-3 py-0.5 font-bold uppercase'>
                  Featured
                </span>
              ) : null}
            </span>
          </div>
          <div className='font-semibold md:col-start-2  '>{job.position}</div>

          <div className='flex text-gray-500 md:col-start-2  gap-2 pt-3 pb-4 md:pt-0 md:pb-4 border-b md:border-0'>
            <p className='text-gray-500'> {job.postedAt}</p>
            <span>&#8226;</span>
            <p className='text-gray-500'> {job.contract}</p>
            <span> &#8226;</span>
            <p className='text-gray-500'>{job.location}</p>
          </div>
        </div>

        <div className='cursor-pointer flex flex-wrap direction-row gap-4 pt-5 items-center font-semibold text-darkCyan'>
          <span
            onClick={lenguagesHandler}
            className='cursor-pointer bg-filterTbl py-1 px-3  rounded '
          >
            {job.role}
          </span>
          <span
            onClick={lenguagesHandler}
            className='cursor-pointer bg-filterTbl py-1 px-3 rounded'
          >
            {job.level}
          </span>

          {job.languages.map((language) => (
            <li
              key={language}
              onClick={lenguagesHandler}
              className='bg-filterTbl p-1  rounded py-1 px-2 '
            >
              {language}
            </li>
          ))}

          {job.tools &&
            job.tools.map((tool) => (
              <span
                key={tool}
                onClick={lenguagesHandler}
                className='bg-filterTbl p-1 rounded py-1 px-3 '
              >
                {tool}
              </span>
            ))}
        </div>
      </div>
    ));
  }
  return (
    <>
      <img
        src='../public/bg-header-desktop.svg'
        alt=''
        className='w-full bg-darkCyan'
      />
      <div className=' bg-zinc-300  bg-bgC py-16 '>
        <div className=' bg-zinc-300 max-w-screen-xl mx-auto px-4 space-y-8'>
          {renderJobs()}
        </div>
      </div>
    </>
  );
}

export default Card;
