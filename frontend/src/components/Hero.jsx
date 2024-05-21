import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

function Hero() {
  return (
    <>
      <div className='bg-yellow-100 py-24'>
        <div className='align-element grid md:grid-cols-2 items-center gap-8'>
          <article>
            <h1 className='text-7xl font-bold tracking-wider'>I'm Adil</h1>

            <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
              Full Stack Developer
            </p>
            <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
              Bringing some ease to the problems
            </p>
            <div className='flex flex-row gap-x-4 mt-4'>
              <a href='https://github.com/adilhusain01'>
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
              <a href='https://www.linkedin.com/in/adil-husain/'>
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
              <a href='https://x.com/adil__husain'>
                <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
            </div>
          </article>
          <article className='hidden md:block mx-auto'>
            <img src={heroImg} className='h-80 lg:h-96' />
          </article>
        </div>
      </div>
    </>
  );
}

export default Hero;