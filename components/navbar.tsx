'use client';

import { CommonProps } from '@/utils/props';
import { ReactNode } from 'react';
import styled from 'styled-components';

const _Navbar = styled.div`
	position: fixed;
	top: 0;
	z-index: 999;
	width: 100%;
	height: var(--navbar-height);
	background-color: var(--dynamic-navbar-background);
	backdrop-filter: blur(10px);

	transition: background-color 0.5s;
`;

const _NavbarContainer = styled.nav`
	display: flex;
	align-items: center;
	max-width: 720px;
	margin: 0 auto;
	height: 100%;
`;

export type NavbarProps = {
	children: ReactNode;
} & CommonProps;

export function Navbar({ children, ...props }: NavbarProps) {
	return (
		<_Navbar {...props}>
			<_NavbarContainer>{children}</_NavbarContainer>
		</_Navbar>
	);
}
