import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";

function SkillsCard({ title, icon, text }) {
  let iconComponent;
  switch (icon) {
    case 'FaNodeJs':
      iconComponent = <FaNodeJs className='h-16 w-16 text-yellow-500' />;
      break;
    case 'SiMongodb':
      iconComponent = <SiMongodb className='h-16 w-16 text-yellow-500' />;
      break;
    case 'FaReact':
      iconComponent = <FaReact className='h-16 w-16 text-yellow-500' />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <article>
      <span>{iconComponent}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
}

export default SkillsCard;
