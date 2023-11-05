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
	nightMode?: boolean;
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

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:root {
	--navbar-height: 72px;

	--brand-amber: rgba(255, 100, 0, 0.6);
	--brand-orange: #ffdebb;
	--brand-green: #0dff00;
	--brand-pink: #ff0090;
	--brand-cyan: #00ffff;
	--brand-violet-000: #510097;
	--brand-violet: #900aff;
	--brand-violet-700: #ba66ff;

	--support-graphite: #123456;

	--dynamic-navbar-background: var(--brand-amber);
	--dynamic-global-background: var(--brand-orange);
	--dynamic-global-shadow: var(--brand-violet-700);
}

html, body {
	scroll-behavior: smooth!important;
	width: 100%;
	margin: 0;

	min-width: 320px;

	transition: background-color 1s;
}

body {
	font-family: Signika;
	margin-top: var(--navbar-height);

	background-color: var(--dynamic-global-background);
}

body::before {
	position: fixed;
	content: ' ';
	width: 100%;
	height: 100%;
	z-index: -1;

	background-image: url(document-background.svg);
	background-size: cover;
	background-repeat: repeat no-repeat;

	transition: transform 1s;

	@media (min-width: 720px) {
		background-position: bottom;
		background-size: contain;
	}

}

${({ nightMode }) =>
	nightMode &&
	`
:root {
	--dynamic-global-background: var(--brand-violet-000);
	--dynamic-global-shadow: var(--brand-pink);
}

body::before {
	transform: translateY(100%);
}
`}
`;

export function DynamicGlobalStyle() {
	const scroll = useScroll();

	return <GlobalStyle nightMode={scroll > 480} />;
}
