import { FloatingNavbar } from '@/src/Components/Nav';
import { StarsPattern } from '@/src/Components/Pattern';
import { MouseTracker } from '@/src/Features/MouseTracker';
import Footer from '@/src/Layouts/Footer';
import Header from '@/src/Layouts/Header';
import Main from '@/src/Layouts/Main';

export default function Home() {
	return (
		<>
			<FloatingNavbar />
			<Header />
			<Main />
			<Footer />
			<MouseTracker />
			<StarsPattern />
		</>
	);
}
