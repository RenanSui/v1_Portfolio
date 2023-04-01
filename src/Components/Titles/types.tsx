export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TestTitleProps = {
  headingLevel?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLOrSVGElement>;

export type TitleProps = {
  children: string | JSX.Element | JSX.Element[];
  className?: String;
};
