'use client';

import React, { createRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { useElementScroll } from '@/utils/viewport';

const _CurtainContainer = styled.div`
	position: relative;
	height: 480px;
	max-width: 1920px;
	margin: 0 auto;
	overflow: hidden;

	@media (min-width: 720px) {
		height: 720px;
	}
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
	${({ position }) => `
	display: ${position === 'right' ? 'block' : 'none'};
	${position}: 0;
	`}
	position: absolute;
	max-height: 100%;
	height: 100%;
	top: 50%;

	user-select: none;

	@media (min-width: 1280px) {
		display: block;
		height: 100%;
		width: auto;
	}
`;

const _CurtainContent = styled.div`
	z-index: 1;
`;

export type CurtainProps = {
	src: Array<string>;
	children?: ReactNode;
};

export function Curtain({ children, src }: CurtainProps) {
	const [currentScroll, setCurrentScroll] = useState<number>(0);
	const curtainRef = createRef<HTMLDivElement>();
	const elementScroll = useElementScroll<HTMLDivElement>();

	useEffect(() => {
		setCurrentScroll(elementScroll(curtainRef.current));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [elementScroll]);

	return (
		<_CurtainContainer ref={curtainRef}>
			<_CurtainImage src={src[0]} position="left" scroll={currentScroll} />
			<_CurtainImage src={src[1]} position="right" scroll={currentScroll} />
			<_CurtainContent>{children}</_CurtainContent>
		</_CurtainContainer>
	);
}
