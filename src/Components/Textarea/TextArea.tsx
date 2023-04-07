import { forwardRef } from 'react';

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
	children?: string | JSX.Element | JSX.Element[];
	type: React.HTMLInputTypeAttribute | undefined;
	disabled: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ ...props }, ref) => {
		return (
			<textarea
				ref={ref}
				className="peer h-[200px] flex-grow resize-none rounded-md border border-custom-blue-900 bg-transparent px-4 py-4 font-light text-white outline-none transition-all duration-700 xs:w-[380px]"
				{...props}
			/>
		);
	}
);

TextArea.displayName = 'TextArea';

export default TextArea;
