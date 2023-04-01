import { SmallPrimaryButton, SmallTransparentButton } from '../Button';
import { ProjectCardProps } from './types';

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { description, githubLink, id, liveDemoLink, name, imagePreview } =
    project;

  return (
    <article className="screeeen group relative z-10 flex w-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-custom-blue-900 bg-custom-blue-900 p-4 transition-all duration-300 hover:bg-transparent xs:w-[380px]">
      <div className="screen-overlay hidden transition-all duration-1000 group-hover:block" />
      <h1 className="hidden">{name}</h1>
      <a
        href={liveDemoLink}
        target="_blank"
        rel="noreferrer"
        className={`relative z-10 h-[280px] w-[266px] select-none rounded-lg bg-cover transition-all duration-300 group-hover:opacity-80 xs:w-[346px] ${imagePreview}`}
      />
      <p className="my-3 text-white transition-all duration-300 group-hover:opacity-80 xs:my-6">
        {description}
      </p>
      <div className="mt-auto flex items-end gap-3 transition-all duration-300 group-hover:opacity-80">
        <SmallTransparentButton href={githubLink} target="_blank">
          Github
        </SmallTransparentButton>
        <SmallPrimaryButton href={liveDemoLink} target="_blank">
          Live Demo
        </SmallPrimaryButton>
      </div>
    </article>
  );
};

export default ProjectCard;
