import { ProjectCard } from '@/src/Components/Card';
import { IProjects } from '@/src/Components/Card/types';
import { ParagraphTitle, SmallTitle } from '@/src/Components/Titles';
import { SectionWrapper } from '@/src/Components/Wrapper';

const Projects: IProjects[] = [
  {
    id: 1,
    name: 'Weather App',
    description: 'Weather App with search option calling an external rest-API.',
    githubLink: 'https://github.com/RenanSui/weather-app',
    liveDemoLink: 'https://ren-weatherapp.vercel.app',
    imagePreview: 'bg-[url(/assets/images/portfolio1.png)]',
  },
  {
    id: 2,
    name: 'Expense Tracker',
    description: 'Expense Tracker with CRUD-functionality.',
    githubLink: 'https://github.com/RenanSui/expense-tracker',
    liveDemoLink: 'https://renansui.github.io/expense-tracker/',
    imagePreview: 'bg-[url(/assets/images/portfolio2.png)]',
  },
  {
    id: 2,
    name: 'Todo App',
    description: 'A Todolist app with basic CRUD-functionality.',
    githubLink: 'https://github.com/RenanSui/todoList',
    liveDemoLink: 'https://ren-todolist.vercel.app',
    imagePreview: 'bg-[url(/assets/images/portfolio3.png)]',
  },
  {
    id: 2,
    name: 'Pokédex',
    description:
      "Pokédex where users can infinite scroll down the page or search for a Pokémon name or it's number and access their information.",
    githubLink: 'https://github.com/RenanSui/pokedex',
    liveDemoLink: 'https://ren-pokedex.vercel.app',
    imagePreview: 'bg-[url(/assets/images/portfolio4.png)]',
  },
];

const Portfolio = () => {
  return (
    <SectionWrapper id="portfolio">
      <SmallTitle>My Recent Work</SmallTitle>
      <ParagraphTitle>Portfolio</ParagraphTitle>

      <div className="mt-4 flex flex-wrap justify-center gap-9">
        {Projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
