import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

function ProjectCard({ img, url, github, title, text }) {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <a href={url} className='cursor-pointer'>
        <img
          src={img}
          alt={title}
          className='w-full object-cover rounded-t-lg h-64'
        />
      </a>
      <div className='capitalize p-8'>
        <a href={url} className='cursor-pointer'>
          <h2 className='text-xl font-medium tracking-wide hover:text-yellow-500 duration-300'>
            {title}
          </h2>
        </a>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
