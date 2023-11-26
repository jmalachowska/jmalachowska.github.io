'use client';

import styled from 'styled-components';

const _Logo = styled.img`
	display: block;
	height: 64px;
	width: auto;
	padding: 8px 0;
`;

export type LogoProps = {
	src?: string;
};

export function Logo({ ...props }: LogoProps) {
	return <_Logo {...props} alt="logo" />;
}
