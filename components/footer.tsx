'use client';

import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Card } from './card';

const _Footer = styled(Card)`
	text-align: center;
	font-weight: bold;
`;

export type FooterProps = {
	children?: ReactNode;
};

export function Footer({ children }: FooterProps) {
	return (
		<_Footer padding={8} marginTop={128} backgroundColor="var(--brand-yellow-900)">
			{children}
		</_Footer>
	);
}
