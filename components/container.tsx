'use client';

import { CommonProps } from '@/utils/props';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

export type ContainerProps = {
	children: ReactNode;
	padding?: number;
} & CommonProps;

const _Container = styled.div<ContainerProps>`
	width: 100%;
	max-width: 720px;
	margin: 0 auto;

	${({ padding }) => `
	padding: ${padding ?? 0}px;
	`}
`;

export function Container({ children, ...props }: ContainerProps) {
	return <_Container {...props}>{children}</_Container>;
}
