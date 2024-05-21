import aboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
import profileImg from '../assets/profile.jpeg';

function About() {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutImg} className='w-full h-64' />
        <article>
          <div className='flex justify-around'>
            <SectionTitle text={'about me'} />
            <img src={profileImg} className='w-32 h-32 rounded-full' />
          </div>

          <p className='text-slate-600 mt-8 leading-loose'>
            A Developer and a Sophomore student of CSE. I try to create
            solutions to the very basic problems that are in front of our eyes
            on daily basis but we tend to ignore them as if it's someone else's
            headache.
          </p>
          <p className='text-slate-600 mt-8 leading-loose'>
            Proficient in : Javascript(with Node.Js), Django(with Python), Git,
            Linux Scripting, React + Vite, Tailwind CSS, C++( Data Structures),
            Java, RDBMS, Operating Systems, Computer Networks, CI/CD, AWS EC2
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
<SectionTitle text={'about us'} />;
