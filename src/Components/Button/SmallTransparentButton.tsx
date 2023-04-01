import { ButtonProps } from './types';

const TransparentButton = ({ children, className, href, target }: ButtonProps) => {
  return (
    <a href={href} target={target ? target : '_self'}>
      <button
        className={`rounded-md border relative border-custom-blue-300 bg-transparent py-2 px-5 text-custom-blue-300 hover:z-10 hover:border-custom-blue-500 hover:bg-custom-blue-500 hover:text-black ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default TransparentButton;
