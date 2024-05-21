function ProjectCard({ img, url, github, title, text }) {
  return (
    <article>
      <img src={img} alt={title} />
    </article>
  );
}

export default ProjectCard;
