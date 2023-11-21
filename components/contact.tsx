import { styled } from 'styled-components';
import { EmailMessage, generateMailtoLink } from '@/utils/mailto';
import { Heading } from './heading';
import { Card } from './card';

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
	top: 0;
	z-index: -1;
	width: 100%;
`;

const _ImageCover = styled.div`
	position: absolute;
	bottom: 0;
	background-color: blue;
	width: 100%;
	height: 100px;
`;

const _TopText = styled.h2`
	display: inline-block;
	font-family: Pacifico;
	font-size: 48px;
	margin: 0;
	text-decoration: underline;
`;

const _LinkCTA = styled.a`
	text-align: center;
	display: block;
	padding: 8px;
	text-decoration: none;
	color: white;
	font-family: KronaOne;
	background-color: var(--brand-violet-700);
	border-radius: 999px;
	min-width: 256px;
	margin: 0 auto;
	margin-top: 16px;
	box-shadow: 2px 2px 4px grey;
`;

const _Heading = styled(Heading)``;

export function ContactForm({ target }: ContactFormProps) {
	const emailData: EmailMessage = {
		address: 'mmjula@wp.pl',
		subject: 'Professional inquiry',
		body: messageTemplate
	};

	const mailtoLink = generateMailtoLink(emailData);

	return (
		<Card backgroundColor="var(--brand-yellow-900)" padding={16} marginTop={128}>
			<_FormTopBar>
				<img src="stamp.svg" alt="" height={92} />
			</_FormTopBar>
			<_FormContent>
				<_FormColumn>
					<div>
						<_FeaturedImage src="flam.svg" alt="" />
					</div>
					<_ImageCover aria-hidden />
				</_FormColumn>
				<_FormColumn>
					<_TopText>Let's talk!</_TopText>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam purus, mollis non ipsum
						quis, rutrum eleifend orci. Quisque ut turpis et sem aliquet suscipit. Nulla nulla
						libero, vestibulum nec mi non, bibendum pretium risus.
					</p>
					<_LinkCTA href={mailtoLink}>Get in touch!</_LinkCTA>
				</_FormColumn>
			</_FormContent>
		</Card>
	);
}
