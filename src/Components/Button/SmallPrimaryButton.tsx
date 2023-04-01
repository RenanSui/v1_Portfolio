import { ButtonProps } from './types';

const PrimaryButton = ({ children, className, href, target }: ButtonProps) => {
  return (
    <a href={href} target={target ? target : '_self'}>
      <button
        className={`relative z-10 rounded-md border border-custom-blue-500 bg-custom-blue-500 py-2 px-5 text-black hover:bg-custom-blue-400 ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default PrimaryButton;
