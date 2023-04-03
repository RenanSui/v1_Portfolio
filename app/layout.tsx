import './globals.css';

export const metadata = {
	title: "Renan Sui's Portfolio",
	description:
		"Renan Sui's portfolio website. Front-end Developer, learning UI/UX Design.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className="bg-[#0a142a]" data-nav="header">
				{children}
			</body>
		</html>
	);
}
