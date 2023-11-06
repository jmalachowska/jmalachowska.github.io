'use client';

import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { useElementScroll } from '@/utils/viewport';

const _CurtainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	position: relative;
	height: 640px;
	max-width: 1280px;
	margin: 0 auto;
	margin-bottom: 128px;
	overflow: hidden;
`;

type _CurtainImageProps = {
	position: 'left' | 'right';
	scroll: number;
};

function _CurtainImageAttributes({ position, scroll }: _CurtainImageProps) {
	const directionalTranslate = position === 'left' ? -scroll : scroll;

	return {
		style: {
			transform: `translate(${directionalTranslate * 0.8}%, -${scroll * 0.4}%)`
		}
	};
}

const _CurtainImage = styled.img.attrs<_CurtainImageProps>(_CurtainImageAttributes)`
	position: fixed;
	height: calc(100% - var(--navbar-height));
	bottom: 0;

	z-index: -1;

	user-select: none;

	${({ position }) => `
	display: ${position === 'right' ? 'block' : 'none'};
	${position}: 0;

	@media (min-width: 900px) {
		display: block;
	}
	`}
`;

const _CurtainBackground = styled.img.attrs<Pick<_CurtainImageProps, 'scroll'>>(({ scroll }) => ({
	style: {
		transform: `translateY(${scroll * 0.2}vh)`,
		opacity: `${100 - scroll}%`
	}
}))`
	position: fixed;
	top: 25%;
	display: block;
	height: 45%;
	z-index: -2;

	@media (min-width: 720px) {
		height: 60%;
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
	const [ref, scroll] = useElementScroll<HTMLDivElement>();

	return (
		<_CurtainContainer ref={ref}>
			<_CurtainBackground alt="" aria-hidden src={src[2]} scroll={scroll} />
			<_CurtainImage alt="" aria-hidden src={src[0]} position="left" scroll={scroll} />
			<_CurtainImage alt="" aria-hidden src={src[1]} position="right" scroll={scroll} />
			<_CurtainContent>{children}</_CurtainContent>
		</_CurtainContainer>
	);
}
