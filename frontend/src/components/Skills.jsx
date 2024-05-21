// import { skills } from '../assets/data';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);
  return (
    <section className='align-element py-20 ' id='skills'>
      <SectionTitle text={'tech stack'} />
      <div className='py-16 grid gap-8 md:grid-col-2 lg:grid-cols-3'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}
