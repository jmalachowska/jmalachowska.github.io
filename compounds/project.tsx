'use client';

import { Card } from '@/components/card';
import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import type { ReactElement } from 'react';
import { styled } from 'styled-components';

const PROJECT_COLOR_TO_ACCENT: Record<string, string> = {
	'var(--brand-green)': 'var(--brand-green-000)',
	'var(--brand-violet)': 'var(--brand-violet-000)',
	'var(--brand-pink)': 'var(--brand-pink-000)',
	'var(--brand-cyan)': 'var(--brand-cyan-000)'
};

const _Card = styled(Card)<{ role: string; onClick: () => void }>`
	@media (min-width: 720px) and (hover) {
		transition: transform 0.2s;

		& > img {
			filter: sepia(0.7);
			transition: filter 0.2s;
		}

		&:hover {
			& > img {
				filter: none;
			}

			z-index: 3;
			transform: scale(1.05) rotate(-1deg);
		}
	}
`;

const _Image = styled(Image)<{ borderColor?: string }>`
	${({ borderColor }) =>
		borderColor &&
		`
	border: 2px solid ${borderColor};
`}
`;

export type Project = {
	title: string;
	summary: string;
	src: string;
	alt: string;
	href?: string;
	year: number;
};

export type ProjectTileProps = {
	children: string;
	color: string;
} & Omit<Project, 'summary'>;

export function ProjectTile({
	href,
	color,
	title,
	alt,
	src,
	children,
	year
}: ProjectTileProps): ReactElement {
	const accentColor = PROJECT_COLOR_TO_ACCENT[color];

	function visitLink() {
		window.open(href, '_blank', 'noopener noreferrer');
	}

	return (
		<_Card tabindex={1} backgroundGradient={color} padding={16} role="link" onClick={visitLink}>
			<_Image src={src} alt={alt} borderColor={accentColor} />
			<Heading textAlign="left" level={3} as="p" marginTop={8} color={accentColor}>
				{year.toString()}
			</Heading>
			<Heading textAlign="left" level={2} as="h3" marginBottom={16}>
				{title}
			</Heading>
			<p>{children}</p>
		</_Card>
	);
}
