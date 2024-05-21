import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

function SkillsCard({ title, icon, text }) {
  let iconComponent;
  switch (icon) {
    case 'FaHtml5':
      iconComponent = <FaHtml5 className='h-16 w-16 text-yellow-500' />;
      break;
    case 'FaJs':
      iconComponent = <FaJs className='h-16 w-16 text-yellow-500' />;
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
