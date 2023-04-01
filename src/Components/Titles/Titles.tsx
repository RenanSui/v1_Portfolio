import { TitleProps } from './types';

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1 className={`text-2xl text-custom-gray-100 ${className}`}>{children}</h1>
  );
};

export const SmallTitle = ({ children, className }: TitleProps) => {
  return (
    <h1 className={`text-sm text-custom-gray-100 ${className}`}>{children}</h1>
  );
};

export const ParagraphTitle = ({ children, className }: TitleProps) => {
  return (
    <p className={`text-2xl text-custom-blue-500 ${className}`}>{children}</p>
  );
};

export const SmallParagraphTitle = ({ children, className }: TitleProps) => {
  return (
    <p className={`text-xl text-custom-blue-500 ${className}`}>{children}</p>
  );
};

// import { HeadingTags, TestTitleProps } from './types';

// export const TestTitle: React.FC<TitleProps> = ({ headingLevel, children, ...props }) => {
//   const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
//   const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
//   const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';
//   const Tag = Title as HeadingTags;

//   return <Tag {...props}>{children}</Tag>;
// };
