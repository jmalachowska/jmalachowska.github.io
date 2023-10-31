import { useEffect, useState } from 'react';
import { clamp } from './math';

export type ElementScrollCalculator<ElementType extends HTMLElement> = (
	element: ElementType | null
) => number;

export function useElementScroll<
	ElementType extends HTMLElement
>(): ElementScrollCalculator<ElementType> {
	const [windowScroll, setWindowScroll] = useState<number>(0);

	useEffect(() => {
		const updateElementScroll = () => {
			setWindowScroll(window.scrollY);
		};

		addEventListener('scroll', updateElementScroll);

		return () => {
			removeEventListener('scroll', updateElementScroll);
		};
	}, []);

	const scrollCalculator = (element: ElementType | null): number => {
		if (!element) {
			return 0;
		}

		const elementBox: DOMRect = element.getBoundingClientRect();
		return (clamp(0, windowScroll - elementBox.top, elementBox.height) / elementBox.height) * 100;
	};

	return scrollCalculator;
}
