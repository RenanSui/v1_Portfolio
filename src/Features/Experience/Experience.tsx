import { Card } from '@/src/Components/Card';
import { Heading } from '@/src/Components/Heading';
import { Icon } from '@/src/Components/Icons';
import { Paragraph } from '@/src/Components/Paragraph';
import { SectionWrapper } from '@/src/Components/Wrapper';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const TechStack = [
	{ id: 1, skill: 'HTML', level: 'Beginner' },
	{ id: 2, skill: 'CSS', level: 'Beginner' },
	{ id: 3, skill: 'JavaScript', level: 'Beginner' },
	{ id: 4, skill: 'React', level: 'Beginner' },
	{ id: 5, skill: 'Tailwind', level: 'Beginner' },
	{ id: 6, skill: 'Next.js', level: 'Beginner' },
];

const Experience = () => {
	return (
		<SectionWrapper id="experience" className="mx-2 xs:mx-4">
			<Paragraph variant={'gray'}>What Skills I Have</Paragraph>
			<Heading variant={'primary'} size={'lg'}>
				My Experience
			</Heading>

			<Card
				variant={'center'}
				size={'large'}
				className="CardLeftPixelEffect my-4 flex flex-wrap px-16 pb-8"
			>
				<Heading
					variant={'primary'}
					size={'default'}
					className="mb-8 mt-8"
				>
					Frontend Development
				</Heading>
				<div className="flex flex-wrap justify-center">
					{TechStack.map((stack) => {
						return (
							<div
								key={stack.id}
								className="my-4 flex w-[150px] flex-wrap self-start"
							>
								<Icon
									icon={faCircleCheck}
									className="mr-2 text-custom-blue-500"
								/>
								<Heading size={'base'}>{stack.skill}</Heading>
								<Paragraph
									variant={'gray'}
									size={'base'}
									className="ml-6 basis-full"
								>
									{stack.level}
								</Paragraph>
							</div>
						);
					})}
				</div>
			</Card>
		</SectionWrapper>
	);
};

export default Experience;
