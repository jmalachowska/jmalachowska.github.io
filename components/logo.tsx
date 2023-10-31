'use client';

import styled from 'styled-components';

const _Logo = styled.img`
	display: block;
	height: 64px;
	width: auto;
`;

export type LogoProps = {
	src?: string;
};

export function Logo({ ...props }: LogoProps) {
	return <_Logo {...props} />;
}
