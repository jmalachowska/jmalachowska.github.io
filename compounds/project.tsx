'use client';

import { Card } from '@/components/card';
import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import { ReactElement } from 'react';

export type Project = {
	title: string;
	summary: string;
	src: string;
	alt: string;
	href?: string;
};

export type ProjectTileProps = {
	children: string;
	color?: string;
} & Omit<Project, 'summary'>;

export function ProjectTile({
	href,
	color,
	title,
	alt,
	src,
	children
}: ProjectTileProps): ReactElement {
	return (
		<Card backgroundGradient={color} padding={16}>
			<Image src={src} alt={alt} />
			<Heading textAlign="left" level={2} as="h3" marginTop={8}>
				{title}
			</Heading>
			<p>{children}</p>
		</Card>
	);
}
