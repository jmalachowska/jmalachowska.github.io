import type { Metadata } from 'next';
import { StyledComponentsRegistry, GlobalStyles } from '@/styles/styles';
import { Navbar } from '@/components/navbar';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
	title: 'Portfolio | J. Małachowska',
	description: 'My personal Graphic, UX/UI Design portfolio. Come in and browse my work.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					<Navbar>
						<Logo src="image.svg" />
					</Navbar>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
