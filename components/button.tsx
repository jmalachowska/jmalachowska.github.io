'use client';

import { styled } from 'styled-components';

export type ButtonProps = {
	onClick?: () => void;
	children?: string;
	variant?: 'outline';
	minWidth?: number;
	href?: string;
};

const _Button = styled.button<Pick<ButtonProps, 'variant' | 'minWidth'>>`
	--accentColor: var(--brand-violet-000);
	text-align: center;
	display: block;
	padding: 8px;
	text-decoration: none;
	color: white;
	font-family: KronaOne;
	border-radius: 999px;

	${({ minWidth }) => `

	min-width: ${minWidth ?? 128}px;
		`}

	${({ variant }) =>
		variant === 'outline'
			? `
		border: 2px solid currentColor;
		background: none;

		@media (hover) {
			transition: box-shadow 0.2s;

			&:hover {
				box-shadow: inset 0 0 16px var(--brand-pink-900);
			}
		}
	`
			: `
		border: none;
		background-color: var(--brand-violet-000);
		box-shadow: 2px 2px 4px grey;

		@media (hover) {
			transition: background-color 0.1s;

			&:hover {
				background-color: var(--brand-violet);
			}
		}
	`}
`;

export function Button({ children, href, onClick, ...props }: ButtonProps) {
	const navigate = () => {
		window.location.href = href ?? '';
	};

	return (
		<_Button {...props} onClick={onClick ?? navigate}>
			{children}
		</_Button>
	);
}
