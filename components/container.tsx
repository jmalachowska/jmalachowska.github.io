'use client';

import { CommonProps } from '@/utils/props';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

const _Container = styled.div`
	width: 100%;
	max-width: 720px;
	margin: 0 auto;
`;

export type ContainerProps = {
	children: ReactNode;
} & CommonProps;

export function Container({ children, ...props }: ContainerProps) {
	return <_Container {...props}>{children}</_Container>;
}
