import { styled } from 'styled-components';
import { EmailMessage, generateMailtoLink } from '@/utils/mailto';
import { Card } from './card';
import { Button } from './button';

const messageTemplate: string = `Hi Julia,

I would like to reach you regarding...
`;

export type ContactFormProps = {
	target: string;
};

const _FormContent = styled.div`
	display: flex;
	gap: 8px;
	align-items: stretch;
	flex-flow: row wrap;
	height: 100%;

	@media (min-width: 600px) {
		flex-flow: row-reverse nowrap;
	}
`;

const _FormTopBar = styled.div`
	min-height: 72px;
	text-align: right;
`;

const _FormColumn = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	flex: 1 1 300px;
	min-height: 360px;
`;

const _FeaturedImage = styled.img`
	width: 100%;
`;

const _TopText = styled.h2`
	display: inline-block;
	font-family: Pacifico;
	font-size: 48px;
	margin: 0;
	text-decoration: underline;
`;

export function ContactForm({ target }: ContactFormProps) {
	const emailData: EmailMessage = {
		address: target,
		subject: 'Professional inquiry',
		body: messageTemplate
	};

	const mailtoLink = generateMailtoLink(emailData);
	const openEmailTemplate = () => {
		window.open(mailtoLink, '_blank', 'noopener noreferrer');
	};

	return (
		<Card backgroundColor="var(--brand-yellow-900)" padding={16} marginTop={128} id="contact">
			<_FormTopBar>
				{/* eslint-disable @next/next/no-img-element */}
				<img src="stamp.svg" alt="" height={92} />
			</_FormTopBar>
			<_FormContent>
				<_FormColumn>
					<_FeaturedImage src="flam.svg" alt="" />
				</_FormColumn>
				<_FormColumn>
					<_TopText>Let&apos;s talk!</_TopText>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam purus, mollis non ipsum
						quis, rutrum eleifend orci. Quisque ut turpis et sem aliquet suscipit. Nulla nulla
						libero, vestibulum nec mi non, bibendum pretium risus.
					</p>
					<Button minWidth={256} onClick={openEmailTemplate}>
						Reach out!
					</Button>
				</_FormColumn>
			</_FormContent>
		</Card>
	);
}
