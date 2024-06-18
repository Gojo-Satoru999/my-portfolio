// components/ProjectCard.js
import Image from 'next/image';

const ProjectCard = ({ title, imageUrl }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <Image src={imageUrl} alt={title} width={300} height={200} />
    </div>
  );
};

export default ProjectCard;
