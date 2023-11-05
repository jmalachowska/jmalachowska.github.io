'use client';

import { CommonProps } from '@/utils/props';
import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

const _Navbar = styled.div<{ backgroundColor?: string }>`
	position: fixed;
	top: 0;
	z-index: 999;
	width: 100%;
	height: var(--navbar-height);
	${({ backgroundColor }) => `
		background-color: ${backgroundColor ?? 'none'};
	`}
	backdrop-filter: blur(10px);

	transition: background-color 0.2s;
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
	const [solidBackground, setSolidBackground] = useState<boolean>(false);

	useEffect(() => {
		function updateScrollState() {
			setSolidBackground(window.scrollY ? true : false);
		}

		addEventListener('scroll', updateScrollState);
		return () => {
			removeEventListener('scroll', updateScrollState);
		};
	}, []);

	return (
		<_Navbar
			backgroundColor={solidBackground ? 'var(--dynamic-navbar-background)' : 'transparent'}
			{...props}>
			<_NavbarContainer>{children}</_NavbarContainer>
		</_Navbar>
	);
}
