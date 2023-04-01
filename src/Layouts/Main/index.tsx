import { About } from '@/src/Features/About';
import { Contact } from '@/src/Features/Contact';
import { Experience } from '@/src/Features/Experience';
import ContactProvider from '@/src/Contexts/Contact/ContactProvider';
import { Portfolio } from '@/src/Features/PortfolioProjects';

// import { Services } from '../MyServices';
// import { Testimonials } from '../Testimonials';

const Main = () => {
  return (
    <main className="font-josefin">
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <ContactProvider>
        <Contact />
      </ContactProvider>
    </main>
  );
};

export default Main;