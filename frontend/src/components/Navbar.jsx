// import { links } from '../assets/data';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Navbar() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/links`
        );
        setLinks(response.data);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <nav className='bg-yellow-100' id='home'>
      <div className='align-element py-4 flex flex-col sm:justify-between sm:flex-row sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          Adil <span className='text-yellow-500'>Husain</span>
        </h2>
        <div className='flex sm:gap-x-7 gap-x-3'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-yellow-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
