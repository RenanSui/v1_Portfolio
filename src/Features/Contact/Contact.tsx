import { ContactCard } from '@/src/Components/Card';
import { IContactInfo } from '@/src/Components/Card/types';
import { ContactInput } from '@/src/Components/Input';
import { ContactLabel } from '@/src/Components/Label';
import { ContactTextarea } from '@/src/Components/Textarea';
import { ParagraphTitle, SmallTitle } from '@/src/Components/Titles';
import { SectionWrapper } from '@/src/Components/Wrapper';
import { IContactPropsInfo } from '@/src/Contexts/Contact/types';
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const contactInfo: IContactInfo[] = [
  {
    id: 1,
    icon: faEnvelope,
    contactType: 'Email',
    contactInformation: 'renanddtao@gmail.com',
    contactLink: 'mailto: renanddtao@gmail.com',
  },
  {
    id: 2,
    icon: faLinkedinIn,
    contactType: 'Linkedin',
    contactInformation: 'renansui',
    contactLink: 'https://www.linkedin.com/in/renansui/',
  },
  {
    id: 3,
    icon: faWhatsapp,
    contactType: 'Whatsapp',
    contactInformation: '+55 71 9 8503 5606',
    contactLink:
      'https://api.whatsapp.com/send?phone=+5571985035606&text=Hello',
  },
];

const INPUT_LABEL: IContactPropsInfo[] = [
  {
    id: 1,
    type: 'name',
    actionType: 'changeName',
    labelPlaceholder: 'Your Full Name',
  },
  {
    id: 2,
    type: 'email',
    actionType: 'changeEmail',
    labelPlaceholder: 'Your Email',
  },
  {
    id: 3,
    type: 'message',
    actionType: 'changeMessage',
    labelPlaceholder: 'Your Message',
  },
];

const Contact = () => {
  // const { contactState } = useContext(ContactContext);

  return (
    <SectionWrapper id="contact" className="">
      <>
        <SmallTitle>Get in Touch</SmallTitle>
        <ParagraphTitle>Contact Me</ParagraphTitle>

        <div className="lg:flex">
          <div className="my-4 flex flex-wrap justify-center gap-4 transition-all duration-700 lg:mx-5 lg:flex-col">
            {contactInfo.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>

          {/* <h1 className="text-white">{contactState.name || 'Name'}</h1>
        <h1 className="text-white">{contactState.email || 'Email'}</h1>
        <h1 className="text-white">{contactState.message || 'Message'}</h1> */}

          <form className="relative mx-3 mt-4 flex flex-col items-center gap-4 rounded-md text-custom-gray-100 transition-all duration-700">
            {INPUT_LABEL.map((inputLabel) => (
              <div
                className="relative flex w-full max-w-[300px] justify-center transition-all duration-700 xs:max-w-[380px]"
                key={inputLabel.id}
              >
                {inputLabel.type === 'message' ? (
                  <ContactTextarea inputLabel={inputLabel} />
                ) : (
                  <ContactInput inputLabel={inputLabel} />
                )}
                <ContactLabel inputLabel={inputLabel} />
              </div>
            ))}

            <button
              className={`z-10 self-start rounded-md border border-custom-blue-500 bg-custom-blue-500 px-5 py-2 text-black transition-all hover:border-white hover:bg-white`}
            >
              Send Message
            </button>
          </form>
        </div>
      </>
    </SectionWrapper>
  );
};

export default Contact;
