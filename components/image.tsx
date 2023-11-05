'use client';

import { styled } from 'styled-components';

export type ImageProps = {
	src: string;
	alt: string;
	width?: number | string;
};

function resolveCssValue(value: string | number): string {
	if (typeof value === 'string') {
		return value;
	}

	return value + 'px';
}

const _Image = styled.img<ImageProps>`
	${({ width }) => `
	width: ${width ? resolveCssValue(width) : '100%'};
	`}
	background-color: white;
	border-radius: 8px;
`;

export function Image(props: ImageProps) {
	return <_Image {...props} />;
}
