import { skills } from '../assets/data';
import SectionTitle from './SectionTitle';
import SkillsCard from './SkillsCard';

export default function Skills() {
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
