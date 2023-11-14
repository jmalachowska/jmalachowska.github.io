'use client';

import type { ReactElement } from 'react';
import { styled } from 'styled-components';
import { Card } from './card';
import { Heading } from './heading';

const _PersonaContainer = styled.div`
	text-align: center;
	margin: 0 auto;
`;

const _PersonaImage = styled.img`
	display: block;
	margin: 0 auto;
	position: relative;

	width: 300px;
`;

export type PersonaProps = {
	src: string;
	name: string;
	designator?: string;
};

export function Persona({ name, designator, ...props }: PersonaProps): ReactElement {
	return (
		<_PersonaContainer>
			<_PersonaImage {...props} alt={name} />
			<Card
				padding={16}
				backgroundGradient="var(--brand-pink-900)"
				marginLeft={8}
				marginRight={8}
				marginBottom={8}>
				<Heading level={2} color="var(--brand-pink-000)">
					{name}
				</Heading>
				{designator && (
					<Heading level={4} as="p" marginTop={8}>
						{designator}
					</Heading>
				)}
			</Card>
		</_PersonaContainer>
	);
}
