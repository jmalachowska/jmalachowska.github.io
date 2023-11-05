'use client';

import { CommonProps } from '@/utils/props';
import { styled } from 'styled-components';

export type HeadingProps = {
	level: number;
	children?: string;
	marginTop?: number;
	marginBottom?: number;
	color?: string;
	textAlign?: 'center' | 'right' | 'left';
} & CommonProps;

type _HeadingProps = {
	fontFamily?: string;
	fontSize?: number;
	fontWeight?: 'bold';
	textShadow?: string;
	letterSpacing?: number;
	textTransform?: 'uppercase' | 'lowercase';
};

const HEADING_STYLES: Array<_HeadingProps> = [
	{},
	{
		fontFamily: 'Pacifico',
		fontSize: 48,
		textShadow: [
			'0  3px 0 var(--brand-pink)',
			'0 -3px 0 var(--brand-pink)',
			'-3px 0 0 var(--brand-pink)',
			' 3px 0 0 var(--brand-pink)'
		].join(', ')
	},
	{
		fontFamily: 'Prompt',
		fontSize: 24,
		letterSpacing: 6,
		textTransform: 'uppercase'
	},
	{
		fontFamily: 'Signika',
		fontWeight: 'bold',
		fontSize: 20
	},
	{
		fontFamily: 'Prompt',
		fontSize: 20
	}
];

const _Heading = styled.h1<_HeadingProps & HeadingProps>`
	${(props) => `
	color: ${props.color ?? 'black'};
	text-align: ${props.textAlign ?? 'center'};
	font-family: ${props.fontFamily};
	font-size: ${props.fontSize}px;
	font-weight: ${props.fontWeight ?? 'normal'};
	margin-top: ${props.marginTop ?? 0}px;
	margin-bottom: ${props.marginBottom ?? 0}px;
	text-shadow: ${props.textShadow ?? 'none'};
	line-height: 1.25;

	letter-spacing: ${props.letterSpacing ?? 0}px;
	text-transform: ${props.textTransform ?? 'none'};
	`}
`;

export function Heading({ children, level, ...props }: HeadingProps) {
	const levelStyling = HEADING_STYLES[level] ?? HEADING_STYLES[3];

	return (
		<_Heading as={`h${level}`} {...props} {...levelStyling}>
			{children}
		</_Heading>
	);
}
