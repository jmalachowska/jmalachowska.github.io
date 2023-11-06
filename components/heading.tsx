'use client';

import { CommonProps } from '@/utils/props';
import { styled } from 'styled-components';

export type HeadingProps = {
	level: number;
	children?: string;
	marginTop?: number;
	marginBottom?: number;
	textAlign?: 'center' | 'right' | 'left';
	color?: string;
} & CommonProps;

type _HeadingProps = {
	fontFamily?: string;
	fontSize?: number;
	fontWeight?: 'bold';
	textShadow?: string;
	lineHeight?: number;
	letterSpacing?: number;
	textTransform?: 'uppercase' | 'lowercase';
};

const H1_OUTLINE_COLOR = 'var(--brand-violet)';

const HEADING_STYLES: Array<_HeadingProps & Partial<HeadingProps>> = [
	{},
	{
		fontFamily: 'Pacifico',
		fontSize: 48,
		lineHeight: 2,
		textShadow: [
			'0  3px 0 ' + H1_OUTLINE_COLOR,
			'0 -3px 0 ' + H1_OUTLINE_COLOR,
			'-3px 0 0 ' + H1_OUTLINE_COLOR,
			' 3px 0 0 ' + H1_OUTLINE_COLOR
		].join(', ')
	},
	{
		fontFamily: 'KronaOne',
		fontSize: 28,
		lineHeight: 1.3,
		textTransform: 'uppercase'
	},
	{
		fontFamily: 'Signika',
		fontWeight: 'bold',
		fontSize: 24
	},
	{
		fontFamily: 'Signika',
		fontSize: 24
	}
];

const _Heading = styled.h1<_HeadingProps & HeadingProps>`
	${(props) => `
	color: ${props.color ?? 'currentColor'};
	text-align: ${props.textAlign ?? 'center'};
	font-family: ${props.fontFamily};
	font-size: ${props.fontSize}px;
	font-weight: ${props.fontWeight ?? 'normal'};
	margin-top: ${props.marginTop ?? 0}px;
	margin-bottom: ${props.marginBottom ?? 0}px;
	text-shadow: ${props.textShadow ?? 'none'};
	line-height: ${props.lineHeight ? props.lineHeight : 1.25};

	letter-spacing: ${props.letterSpacing ?? 0}px;
	text-transform: ${props.textTransform ?? 'none'};
	`}

	${({ level }) => level === 1 && `transform: rotate(-3deg);`}
`;

export function Heading({ children, level, ...props }: HeadingProps) {
	const levelStyling = HEADING_STYLES[level] ?? HEADING_STYLES[4];

	return (
		<_Heading as={`h${level}`} level={level} {...props} {...levelStyling}>
			{children}
		</_Heading>
	);
}
