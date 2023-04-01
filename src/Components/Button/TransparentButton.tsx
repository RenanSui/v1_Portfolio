import { ButtonProps } from './types';

const TransparentButton = ({
  children,
  className,
  href,
  target,
}: ButtonProps) => {
  return (
    <a href={href} target={target ? target : '_self'}>
      <button
        className={`relative rounded-md border border-custom-blue-300 bg-transparent px-5 py-3 text-custom-blue-300 hover:z-10 hover:border-custom-blue-500 hover:bg-custom-blue-500 hover:text-black ${className}`}
      >
        {children}
      </button>
    </a>
  );
};

export default TransparentButton;
