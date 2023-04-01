import { SectionWrapperProps } from './types';

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`m-auto mt-28 flex max-w-[1440px] cursor-default flex-col items-center justify-center pt-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
