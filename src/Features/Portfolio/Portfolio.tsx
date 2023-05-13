import { Anchor } from '@/src/Components/Anchor';
import { Card } from '@/src/Components/Card';
import { Heading } from '@/src/Components/Heading';
import { Paragraph } from '@/src/Components/Paragraph';
import { SectionWrapper } from '@/src/Components/Wrapper';

const Projects = [
	{
		id: 1,
		name: 'Weather App',
		description:
			'Weather App with search option calling an external rest-API.',
		githubLink: 'https://github.com/RenanSui/weather-app',
		liveDemoLink: 'https://ren-weatherapp.vercel.app',
		imagePreview: 'bg-[url(/Assets/Images/portfolio1.png)]',
	},
	{
		id: 2,
		name: 'Expense Tracker',
		description: 'Expense Tracker with CRUD-functionality.',
		githubLink: 'https://github.com/RenanSui/expense-tracker',
		liveDemoLink: 'https://renansui.github.io/expense-tracker/',
		imagePreview: 'bg-[url(/Assets/Images/portfolio2.png)]',
	},
	{
		id: 2,
		name: 'Todo App',
		description: 'A Todolist app with basic CRUD-functionality.',
		githubLink: 'https://github.com/RenanSui/todoList',
		liveDemoLink: 'https://ren-todolist.vercel.app',
		imagePreview: 'bg-[url(/Assets/Images/portfolio3.png)]',
	},
	{
		id: 2,
		name: 'Pokédex',
		description:
			"Pokédex where users can infinite scroll down the page or search for a Pokémon name or it's number and access their information.",
		githubLink: 'https://github.com/RenanSui/pokedex',
		liveDemoLink: 'https://ren-pokedex.vercel.app',
		imagePreview: 'bg-[url(/Assets/Images/portfolio4.png)]',
	},
];

const Portfolio = () => {
	return (
		<SectionWrapper id="portfolio" className="">
			<Paragraph variant={'gray'}>My Recent Work</Paragraph>
			<Heading variant={'primary'} size={'lg'}>
				Portfolio
			</Heading>

			<div className="mt-4 flex flex-wrap justify-center gap-4">
				{Projects.map((project) => {
					return (
						<Card
							key={project.id}
							size={'medium'}
							className="group gap-4 p-4"
						>
							<div className="screen-overlay hidden transition-all duration-1000 group-hover:block" />
							<Heading className="hidden">{project.name}</Heading>
							<Anchor
								href={project.liveDemoLink}
								className={`h-[320px] w-full bg-cover group-hover:opacity-80 ${project.imagePreview}`}
							/>
							<Paragraph size={'base'}>
								{project.description}
							</Paragraph>
							<div className="mb-4 mt-auto">
								<Anchor
									variant={'outline'}
									size={'sm'}
									href={project.githubLink}
									target="_blank"
									className="ml-1"
								>
									Github
								</Anchor>
								<Anchor
									variant={'primary'}
									size={'sm'}
									href={project.liveDemoLink}
									target="_blank"
									className="ml-4"
								>
									Live Demo
								</Anchor>
							</div>
						</Card>
					);
				})}

				{/* https://renansui-projects.vercel.app */}
				<article className="flex w-full flex-col items-center gap-2 pt-8">
					<Paragraph variant={'primary'} size={'lg'}>
						See More Projects
					</Paragraph>
					<a
						href="https://renansui-projects.vercel.app"
						target="_blank"
					>
						<Paragraph size={'base'}>
							[ All Projects Collection ]
						</Paragraph>
					</a>
				</article>
			</div>
		</SectionWrapper>
	);
};

export default Portfolio;
