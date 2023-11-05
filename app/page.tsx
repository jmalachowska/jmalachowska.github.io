import { Container } from '@/components/container';
import { Curtain } from '@/components/curtain';
import { Heading } from '@/components/heading';
import { Mosaic } from '@/components/mosaic';
import { Persona } from '@/components/persona';
import type { Project } from '@/compounds/project';

const loremIpsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer gravida vestibulum pellentesque. Aliquam euismod rutrum pellentesque.
Proin dignissim ullamcorper urna. Nam quis magna at velit aliquam scelerisque quis et tortor.
`;

const projects: Array<Project> = [
	{
		title: 'test',
		src: 'image.svg',
		alt: 'test',
		summary: loremIpsum
	},
	{
		title: 'test',
		src: 'image_wide.svg',
		alt: 'test',
		summary: loremIpsum
	},
	{
		title: 'test',
		src: 'image_wide.svg',
		alt: 'test',
		summary: loremIpsum
	},
	{
		title: 'test',
		src: 'image.svg',
		alt: 'test',
		summary: loremIpsum
	},
	{
		title: 'test',
		src: 'image.svg',
		alt: 'test',
		summary: loremIpsum
	},
	{
		title: 'test',
		src: 'image.svg',
		alt: 'test',
		summary: loremIpsum
	},
	{
		title: 'test',
		src: 'image.svg',
		alt: 'test',
		summary: loremIpsum
	}
];

export default function Home() {
	return (
		<main>
			<Curtain src={['palmtree_alt.svg', 'palmtree.svg', 'sun.svg']}>
				<Heading color="white" level={1}>
					Design Portfolio
				</Heading>
				<Persona src="placeholder.png" name="Dżejmalacho" designator="Graphic & UX/UI Designer" />
			</Curtain>
			<Container padding={8}>
				<Mosaic>{projects}</Mosaic>
			</Container>
		</main>
	);
}
