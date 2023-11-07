'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { createGlobalStyle, ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { useScroll } from '@/utils/viewport';

export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <Fragment>{styles}</Fragment>;
	});

	if (typeof window !== 'undefined') return <Fragment>{children}</Fragment>;

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
	);
}

export type GlobalStyleProps = {
	scroll: number;
};

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
@font-face {
	font-family: "Agbalumo";
	font-weight: 400;
	src: url(fonts/Agbalumo-Regular.ttf);
}

@font-face {
	font-family: "Pacifico";
	font-weight: 400;
	src: url(fonts/Pacifico-Regular.ttf);
}

@font-face {
	font-family: "Signika";
	font-weight: 400;
	src: url(fonts/SignikaNegative-Light.ttf);
}

@font-face {
	font-family: "Signika";
	font-weight: 700;
	src: url(fonts/SignikaNegative-Medium.ttf);
}

@font-face {
	font-family: "Prompt";
	font-weight: 700;
	src: url(fonts/Prompt-Black.ttf);
}

@font-face {
	font-family: "KronaOne";
	font-weight: 400;
	src: url(fonts/KronaOne-Regular.ttf);
}

* {
	box-sizing: border-box;
}

:root {
	--navbar-height: 72px;

	--brand-amber: #ff6400;
	--brand-amber-700: #ffa266;
	--brand-amber-900: #ffcc99;
	--brand-amber-translucent: #ff6400b0;
	--brand-green: #0dff00;
	--brand-green-000: #0a6600;
	--brand-pink: #ff0090;
	--brand-pink-000: #990054;
	--brand-pink-900: #ff99d3;
	--brand-pink-translucent: #ff0090d0;
	--brand-cyan: #00ffff;
	--brand-cyan-000: #006666;
	--brand-violet-000: #510097;
	--brand-violet: #900aff;
	--brand-violet-translucent: #900affd0;
	--brand-violet-700: #ba66ff;
	--brand-yellow: #ffcc00;
	--brand-yellow-700: #ffe066;
	--brand-yellow-900: #fff5cc;

	--support-peach: #ffaa99;

	--dynamic-navbar-background: transparent;
	--dynamic-navbar-blur: transparent;
}

html, body {
	scroll-behavior: smooth!important;
	width: 100%;
	margin: 0;

	min-width: 320px;
}

body {
	margin-top: var(--navbar-height);

	font-family: Signika;
	color: black;

	background-attachment: fixed;
	background-color: var(--brand-amber-900);
	background-image: url(sunset_alt.svg);
	background-size: cover;
	background-position: top;

	transition: background-position 1s;
}

body::before {
	position: fixed;
	content: '';
	width: 100%;
	height: 100%;
	min-height: 720px;
	z-index: -1;

	background-image: url(document-background-alt.svg);
	background-size: auto 900px;
	background-position: bottom;
	background-repeat: repeat no-repeat;

	transition: transform 1s, filter 1s;
}

${({ scroll }) =>
	scroll > 0 &&
	`
:root {
	--dynamic-navbar-background: var(--brand-amber-translucent);
	--dynamic-navbar-blur: 10px;
}
`}

${({ scroll }) =>
	scroll > 360 &&
	`
@media (min-width: 900px) {
	body {
		background-position: bottom;
	}
}

body::before {
	transform: translateY(20%);
	filter: saturate(0.5);
}
`}
`;

export function DynamicGlobalStyle() {
	const scroll = useScroll();

	return <GlobalStyle scroll={scroll} />;
}
