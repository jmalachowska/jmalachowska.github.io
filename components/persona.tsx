'use client';

import type { ReactElement } from 'react';
import { styled } from 'styled-components';
import { Heading } from './heading';

const _PersonaContainer = styled.div`
	text-align: center;
	margin: 0 auto;
`;

const _PersonaImage = styled.img`
	display: inline-block;
	position: relative;
	width: 192px;

	@media (min-width: 720px) {
		width: 280px;
	}
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
			<Heading level={2} marginTop={16}>
				{name}
			</Heading>
			{designator && (
				<Heading level={3} as="p">
					{designator}
				</Heading>
			)}
		</_PersonaContainer>
	);
}
