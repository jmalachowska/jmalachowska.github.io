'use client';

import type { CommonProps } from '@/utils/props';
import type { ReactElement, ReactNode } from 'react';
import { styled } from 'styled-components';

export type CardProps = {
	children?: ReactNode;
	padding?: number;
	marginTop?: number;
	marginBottom?: number;
	marginLeft?: number | 'auto';
	marginRight?: number | 'auto';
} & CommonProps;

const _Card = styled.div<CardProps>`
	border-radius: 16px;
	background-color: white;

	${(props) => `
	padding: ${props.padding ?? 0}px;
	margin-top: ${props.marginTop ?? 0}px;
	margin-bottom: ${props.marginBottom ?? 0}px;
	margin-left: ${props.marginLeft ?? 0}px;
	margin-right: ${props.marginRight ?? 0}px;
	`}
`;

export function Card({ children, ...props }: CardProps): ReactElement {
	return <_Card {...props}>{children}</_Card>;
}
