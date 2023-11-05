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
			transform: `translate(${directionalTranslate}%, -50%)`
		}
	};
}

const _CurtainImage = styled.img.attrs<_CurtainImageProps>(_CurtainImageAttributes)`
	position: absolute;
	height: 100%;
	top: 50%;

	user-select: none;

	${({ position }) => `
	display: ${position === 'right' ? 'block' : 'none'};
	${position}: 0;

	@media (min-width: 720px) {
		display: block;
	}
	`}
`;

const _CurtainBackground = styled.img.attrs<Pick<_CurtainImageProps, 'scroll'>>(({ scroll }) => ({
	style: {
		transform: `translateY(${scroll}%)`
	}
}))`
	position: absolute;
	top: 0;
	display: block;
	height: 60%;
	z-index: 0;

	@media (min-width: 720px) {
		height: 80%;
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
			<_CurtainBackground alt="" aria-hidden src={src[2]} scroll={scroll * 1.25} />
			<_CurtainImage alt="" aria-hidden src={src[0]} position="left" scroll={scroll * 0.4} />
			<_CurtainImage alt="" aria-hidden src={src[1]} position="right" scroll={scroll * 0.4} />
			<_CurtainContent>{children}</_CurtainContent>
		</_CurtainContainer>
	);
}
