import type { Metadata } from 'next';
import { StyledComponentsRegistry, DynamicGlobalStyle } from '@/styles/styles';
import { Navbar } from '@/components/navbar';
import { Logo } from '@/components/logo';
import { Button } from '@/components/button';

export const metadata: Metadata = {
	title: 'Portfolio | J. Małachowska',
	description: 'My personal Graphic, UX/UI Design portfolio. Come in and browse my work.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<DynamicGlobalStyle />
					<Navbar>
						<Logo src="logo.svg" />
						<Button variant="outline" href="#contact">
							Contact
						</Button>
					</Navbar>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
