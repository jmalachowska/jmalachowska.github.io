'use client';

import React from 'react';
import type { ReactNode } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useScroll } from '@/utils/viewport';

const _CurtainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	position: relative;
	height: 540px;
	max-width: 1280px;
	margin: 0 auto;
	margin-bottom: 256px;
	overflow: hidden;
`;

type CurtainImageProps = {
	position: 'left' | 'right';
};

const POSTION_TO_VECTOR = {
	right: 1,
	left: -1
};

const curtainImageKeyframes = (position: 'left' | 'right') => keyframes`
	to {
		transform: translate3d(${POSTION_TO_VECTOR[position] * 100}%, -50%, 0);
	}
`;

const _CurtainImage = styled.img<CurtainImageProps>`
	position: fixed;
	height: 480px;
	top: 72px;

	${({ position }) => css`
		${position}: 0;
		display: ${position === 'right' ? 'block' : 'none'};
		animation: ${curtainImageKeyframes(position)} 1s ease-out forwards;
		animation-play-state: paused;
		animation-delay: calc(var(--scroll) / 720 * -1s);
	`}

	z-index: -1;

	@media (min-width: 720px) {
		display: block;
		height: 720px;
	}
`;

const _CurtainBackgroundAnimation = keyframes`
	to {
		transform: translate3d(0, 100%, 0);
		opacity: 0%;
	}
`;

const _CurtainBackground = styled.img`
	position: fixed;
	display: block;
	top: 200px;
	height: 320px;
	z-index: -2;

	animation: ${_CurtainBackgroundAnimation} 1s ease-out forwards;
	animation-play-state: paused;
	animation-delay: calc(var(--scroll) / 720 * -1s);

	@media (min-width: 720px) {
		top: 180px;
		height: 400px;
	}
`;

const _CurtainContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 1;
	width: 100%;
	max-width: 720px;
`;

export type CurtainProps = {
	src: Array<string>;
	children?: ReactNode;
};

export function Curtain({ children, src }: CurtainProps) {
	useScroll();

	return (
		<_CurtainContainer>
			<_CurtainBackground alt="" aria-hidden src={src[2]} />
			<_CurtainImage alt="" aria-hidden src={src[0]} position="left" />
			<_CurtainImage alt="" aria-hidden src={src[1]} position="right" />
			<_CurtainContent>{children}</_CurtainContent>
		</_CurtainContainer>
	);
}
