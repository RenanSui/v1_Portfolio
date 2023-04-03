import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '../Heading';
import { BigCardProps } from './types';

const BigCard = ({ title, techStack, icon }: BigCardProps) => {
	return (
		<section className="CardLeftPixelEffect z-10 mx-2 flex max-w-[500px] cursor-default flex-col items-center justify-center rounded-xl border border-custom-blue-900 bg-custom-blue-900 pb-4 transition-all duration-300 hover:bg-transparent xs:mx-3">
			<Heading variant={'primary'} size={'default'} className="mb-4 mt-8">
				{title}
			</Heading>
			<div className="flex flex-wrap items-center justify-center">
				{techStack.map((skill) => (
					<article
						key={skill.id}
						className="flex w-[150px] flex-wrap items-center p-4 xs:w-[200px]"
					>
						<FontAwesomeIcon
							icon={icon}
							className={`mr-2 h-4 w-4 text-custom-blue-500 transition-all duration-500 `}
						/>
						<h1 className="text-white">{skill.skill}</h1>
						<p className="ml-6 basis-full text-custom-gray-100">
							{skill.level}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default BigCard;

{
	//  <FontAwesomeIcon
	//     icon={icon}
	//     className={`h-4 w-4 text-custom-blue-500 transition-all duration-500 `}
	//     />
	//   <h1 className="mt-6 text-white">{title}</h1>
	//     <p className="mt-2 text-sm font-light text-custom-gray-100">
	//     {message}
	// </p>
}

('after:bg-[linear-gradient(transparent,_mediumslateblue,_transparent)]');
