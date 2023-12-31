'use client';

import { CommonProps } from '@/utils/props';
import { useScroll } from '@/utils/viewport';
import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const navbarBackgroundKeyframes = keyframes`
to {
	background-color: #510097aa;
}
`;

const _Navbar = styled.div`
	position: fixed;
	top: 0;
	z-index: 999;
	width: 100%;
	height: var(--navbar-height);
	backdrop-filter: blur(10px);

	--scroll-percent: clamp(0, calc(var(--scroll) / 128), 1);
	animation: ${navbarBackgroundKeyframes} 1s linear forwards;
	animation-play-state: paused;
	animation-delay: calc(var(--scroll-percent) * -1s);
`;

const _NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 720px;
	margin: 0 auto;
	padding: 0 8px;
	height: 100%;
`;

export type NavbarProps = {
	children: ReactNode;
} & CommonProps;

export function Navbar({ children, ...props }: NavbarProps) {
	useScroll();

	return (
		<_Navbar {...props}>
			<_NavbarContainer>{children}</_NavbarContainer>
		</_Navbar>
	);
}
