import { links } from '../assets/data';

function Footer() {
  return (
    <section className='bg-yellow-100 py-12 sm:py-8'>
      <div className='align-element grid grid-cols-1 sm:grid-cols-2'>
        <div className='mx-auto capitalize flex gap-4 '>
          {links.map((link) => (
            <a
              className='text-lg tracking-wide hover:text-yellow-600 duration-300'
              key={link.id}
              href={link.href}
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className='mx-auto text-slate-600 mt-8 sm:mt-0'>
          © 2024 Adil Husain. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
