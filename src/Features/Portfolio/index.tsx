import { FloatingNavbar } from '@/src/Components/Nav';
import { StarsPattern } from '@/src/Components/Pattern';
import Footer from '@/src/Layouts/Footer';
import Header from '@/src/Layouts/Header';
import Main from '@/src/Layouts/Main';
import { MouseTracker } from '../MouseTracker';

const Portfolio = () => {
	return (
		<>
			<MouseTracker />
			<StarsPattern />
			<FloatingNavbar />
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default Portfolio;
