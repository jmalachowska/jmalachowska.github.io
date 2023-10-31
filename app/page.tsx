import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Curtain } from '@/components/curtain';

export default function Home() {
	return (
		<main>
			<Curtain src={['palmtree_alt.svg', 'palmtree.svg']}>
				<Container>
					<h1>Test</h1>
				</Container>
			</Curtain>
			<Container>
				<Card padding={16}>
					<p>{'lorem ipsum '.repeat(500)}</p>
				</Card>
			</Container>
		</main>
	);
}
