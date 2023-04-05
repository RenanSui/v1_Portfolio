import { Dispatch, SetStateAction, useEffect } from 'react';

const HandleWindowResize = (
	setWindowSize: Dispatch<SetStateAction<number[]>>
) => {
	useEffect(() => {
		const windowResize = () => {
			setWindowSize([
				window.innerWidth,
				window.document.body.offsetHeight,
			]);
		};

		const windowScroll = () => {
			setWindowSize([
				window.innerWidth,
				window.document.body.offsetHeight,
			]);
		};

		window.addEventListener('resize', windowResize);
		window.addEventListener('scroll', windowScroll);

		return () => {
			window.removeEventListener('resize', windowResize);
			window.removeEventListener('scroll', windowScroll);
		};
	});

	useEffect(() => {
		setWindowSize([window.innerWidth, window.document.body.offsetHeight]);
	}, [setWindowSize]);
};

export default HandleWindowResize;
