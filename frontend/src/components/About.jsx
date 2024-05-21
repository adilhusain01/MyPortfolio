import aboutImg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutImg} className='w-full h-64' />
        <article>
          <SectionTitle text={'about me'} />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            asperiores sit exercitationem doloremque sapiente a iste obcaecati
            id, odio repudiandae commodi porro mollitia distinctio? Nostrum,
            quas alias? Delectus, fugit molestias magnam dolorem quasi sint ut
            aspernatur facilis autem. Adipisci delectus quidem tempora quisquam
            nulla corporis quae laboriosam magni debitis cupiditate doloremque
            nam ea voluptates voluptatibus sit non dolor ullam praesentium, quia
            possimus maxime facilis.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
<SectionTitle text={'about us'} />;
