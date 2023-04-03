import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SmallCardProps } from './types';

const SmallCard = ({ title, message, icon, topic }: SmallCardProps) => {
	return (
		<a href={`#${topic}`} className="CardLeftPixelEffect">
			<section className="z-10 flex h-[140px] w-[142px] max-w-full cursor-default flex-col items-center justify-center rounded-xl border border-custom-blue-900 bg-custom-blue-900 transition-all duration-300 hover:bg-transparent xs:h-[170px] xs:w-[190px] sm:h-[200px] sm:w-[220px]">
				<FontAwesomeIcon
					icon={icon}
					className={`h-6 w-6 text-custom-blue-500 transition-all duration-500 `}
				/>
				<h1 className="mt-6 text-white">{title}</h1>
				<p className="mt-2 text-sm font-light text-custom-gray-100">
					{message}
				</p>
			</section>
		</a>
	);
};

export default SmallCard;
