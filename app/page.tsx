'use client';

import { Card } from '@/components/card';
import { ContactForm } from '@/components/contact';
import { Container } from '@/components/container';
import { Curtain } from '@/components/curtain';
import { Footer } from '@/components/footer';
import { Heading } from '@/components/heading';
import { Mosaic } from '@/components/mosaic';
import { Persona } from '@/components/persona';

import projects from '../projects.json';

export default function Home() {
	return (
		<main>
			<Curtain src={['palmtree_left.svg', 'palmtree_right.svg', 'sun.svg']}>
				<Heading color="white" level={1}>
					Design Portfolio
				</Heading>
				<Persona
					src="jmalacho.png"
					name="Julia Małachowska"
					designator="Graphic & UX/UI Designer"
				/>
			</Curtain>
			<Container padding={8}>
				<Card backgroundColor="var(--brand-violet)" padding={16} marginBottom={8} color="white">
					<hgroup>
						<Heading level={4} as="h2" textAlign="left">
							My works
						</Heading>
						<Heading level={2} as="p" textAlign="left">
							Browse projects
						</Heading>
					</hgroup>
				</Card>
				<Mosaic>{projects}</Mosaic>
				<ContactForm target="mmjula@wp.pl" />
				<Footer>
					© 2023 Julia Małachowska
					<br />
					<small>Co-designed & created by Artur Miller</small>
				</Footer>
			</Container>
		</main>
	);
}
