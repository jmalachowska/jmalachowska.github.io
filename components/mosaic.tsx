'use client';

import type { Project, ProjectTileProps } from '@/compounds/project';
import { ProjectTile } from '@/compounds/project';
import { styled } from 'styled-components';

const _MosaicContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 8px;
`;

const _MosaicColumn = styled.div`
	flex: 1 0 240px;
	display: flex;
	flex-flow: column nowrap;
	gap: 8px;

	& > div {
		flex: 1 0 auto;
	}
`;

const COLOR_ARRAY = [
	'var(--brand-violet)',
	'var(--brand-cyan)',
	'var(--brand-green)',
	'var(--brand-pink)'
];

export type MosaicProps = {
	children: Array<Project>;
};

export function Mosaic({ children }: MosaicProps) {
	const middleIndex = Math.ceil(children.length / 2);
	const firstColumn = children?.slice(0, middleIndex);
	const secondColumn = children?.slice(middleIndex, children.length);
	return (
		<_MosaicContainer>
			<_MosaicColumn>
				{firstColumn.map(({ summary, ...data }, index) => {
					return (
						<ProjectTile {...data} key={index} color={COLOR_ARRAY[index % 2]}>
							{summary}
						</ProjectTile>
					);
				})}
			</_MosaicColumn>
			{Boolean(secondColumn.length) && (
				<_MosaicColumn>
					{secondColumn.map(({ summary, ...data }, index) => {
						return (
							<ProjectTile {...data} key={index} color={COLOR_ARRAY[(index % 2) + 2]}>
								{summary}
							</ProjectTile>
						);
					})}
				</_MosaicColumn>
			)}
		</_MosaicContainer>
	);
}
