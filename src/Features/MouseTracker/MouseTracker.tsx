import { useEffect, useRef, useState } from 'react';

const MouseTracker = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const refContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const HandleMouseMove = (event: MouseEvent) => {
			setMousePos({ x: event.clientX, y: event.clientY });

			if (refContainer.current) {
				const { x, y } = mousePos;
				refContainer.current.animate(
					{ left: `${x}px`, top: `${y}px` },
					{ duration: 4000, fill: 'forwards' }
				);
			}

			const initialMouseTrackerState = '0px';
			let MouseTrackerPixels = '0px';
			const element = document.elementFromPoint(
				event.clientX,
				event.clientY
			);
			const elementClassList = element?.classList;

			if (elementClassList?.contains('FooterTitle'))
				MouseTrackerPixels = '130px';
			if (elementClassList?.contains('AnchorMouseTracker'))
				MouseTrackerPixels = '51px';
			if (elementClassList?.contains('AnchorIconMouseTracker'))
				MouseTrackerPixels = '25px';
			if (elementClassList?.contains('MouseTracker'))
				MouseTrackerPixels = '12px';

			if (refContainer.current) {
				if (MouseTrackerPixels === initialMouseTrackerState)
					refContainer.current.style.width = '0px';
				if (MouseTrackerPixels !== initialMouseTrackerState)
					refContainer.current.style.width = MouseTrackerPixels;
			}
		};

		window.addEventListener('mousemove', HandleMouseMove);

		return () => {
			window.removeEventListener('mousemove', HandleMouseMove);
		};
	});

	return (
		<div
			className=" pointer-events-none fixed -left-1/2 -top-1/2 z-[999] aspect-[1] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00a2ff] mix-blend-difference transition-all duration-300"
			ref={refContainer}
		/>
	);
};

// 51px

export default MouseTracker;
