import { createRef, useEffect, useState } from 'react';
import type { Ref } from 'react';
import { clamp } from './math';

export function useScroll(): number {
	const [windowScroll, setWindowScroll] = useState<number>(
		typeof window === 'undefined' ? 0 : window.scrollY
	);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		document.body.style.setProperty('--scroll', window.scrollY.toString());

		const updateElementScroll = () => {
			setWindowScroll(window.scrollY);
			document.body.style.setProperty('--scroll', window.scrollY.toString());
		};

		addEventListener('scroll', updateElementScroll);

		return () => {
			removeEventListener('scroll', updateElementScroll);
		};
	}, []);

	return windowScroll;
}

export function useElementScroll<ElementType extends HTMLElement>(): [Ref<ElementType>, number] {
	const elementRef = createRef<ElementType>();
	const [elementScroll, setElementScroll] = useState<number>(0);
	const windowScroll = useScroll();

	useEffect(() => {
		const element = elementRef.current;
		if (!element) {
			return;
		}

		const elementBox: DOMRect = element.getBoundingClientRect();
		const scrollPercentage =
			(clamp(0, windowScroll - elementBox.top, elementBox.height) / elementBox.height) * 100;
		setElementScroll(scrollPercentage);
	}, [windowScroll, elementRef]);

	return [elementRef, elementScroll];
}
