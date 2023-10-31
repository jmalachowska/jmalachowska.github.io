'use client';

import React, { Fragment, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { createGlobalStyle, ServerStyleSheet, StyleSheetManager } from 'styled-components';

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

export const GlobalStyles = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

:root {
	--navbar-height: 72px;

	--brand-orange: #ffbb66;
	--brand-green: #0dff00;
	--brand-pink: #ff0090;
	--brand-cyan: #00ffff;
	--brand-violet: #900aff;
}

html, body {
	scroll-behavior: smooth!important;
	width: 100%;
	margin: 0;
	background-color: var(--brand-orange);

	min-width: 320px;
}

body {
	margin-top: var(--navbar-height);

	background-image: url(document-background.svg);
	background-size: cover;
	background-position: top;
	background-attachment: fixed;
	background-repeat: repeat no-repeat;

	@media (min-width: 720px) {
		background-position: bottom;
		background-size: contain;
	}
}
`;
