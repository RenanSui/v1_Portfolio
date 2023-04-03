import { BigCard } from '@/src/Components/Card';
import { Heading } from '@/src/Components/Heading';
import { Paragraph } from '@/src/Components/Paragraph';
import { SectionWrapper } from '@/src/Components/Wrapper';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const techStack = [
	{ id: 1, skill: 'HTML', level: 'Beginner' },
	{ id: 2, skill: 'CSS', level: 'Beginner' },
	{ id: 3, skill: 'JavaScript', level: 'Beginner' },
	{ id: 4, skill: 'React', level: 'Beginner' },
	{ id: 5, skill: 'Tailwind', level: 'Beginner' },
	{ id: 6, skill: 'Next.js', level: 'Beginner' },
];

const Experience = () => {
	return (
		<SectionWrapper id="experience">
			<Paragraph variant={'gray'}>What Skills I Have</Paragraph>
			<Heading variant={'primary'} size={'lg'}>
				My Experience
			</Heading>

			<div className="mt-4 flex flex-col lg:flex-row">
				<BigCard
					title={'Frontend Development'}
					techStack={techStack}
					icon={faCircleCheck}
				/>
			</div>
		</SectionWrapper>
	);
};

export default Experience;

// className="mt-28 flex cursor-default flex-col items-center justify-center"
