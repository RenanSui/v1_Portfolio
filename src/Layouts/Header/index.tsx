import Image from 'next/image';
import { PrimaryButton, TransparentButton } from '../../Components/Button';
import { SectionWrapper } from '../../Components/Wrapper';

const Header = () => {
  return (
    <>
      <SectionWrapper id="" className="mt-16 font-josefin text-white">
        <>
          <p>Hello, I&apos;m</p>
          <p className="text-5xl">Renan Sui</p>
          <p className="text-custom-blue-300">Frontend Developer</p>
          <span className="mt-8 flex gap-4">
            <TransparentButton href="https://cdn.discordapp.com/attachments/946119540356575343/1090621020278358088/Profile.pdf">
              Download CV
            </TransparentButton>
            <PrimaryButton href="#contact">Let&apos;s Talk</PrimaryButton>
          </span>
          <span className="mx-5">
            <Image
              src="/Assets/Images/pfp2.png"
              alt="Renan Sui's photo"
              width={500}
              height={500}
              className="relative z-[10] mt-12 select-none rounded-full"
            />
          </span>
        </>
      </SectionWrapper>
    </>
  );
};

export default Header;
