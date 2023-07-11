import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
	default as reactPizzaSrc,
	default as thumbFarfor,
} from '../public/images/works/react-pizza.png'
const Works = () => (
	<Layout title='Works'>
		<Container>
			<Heading as='h3' fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					<WorkGridItem
						id='react-pizza'
						title='React Pizza'
						thumbnail={reactPizzaSrc}
					>
						Online shop for sell pizzas
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id='farfor' title='Farfor' thumbnail={thumbFarfor}>
						A FullStack online shop for commercial production
					</WorkGridItem>
				</Section>
			</SimpleGrid>

			<Heading as='h3' fontSize={20} mb={4}>
				Collaborations
			</Heading>
			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					<WorkGridItem id='farfor' title='Farfor' thumbnail={thumbFarfor}>
						A FullStack online shop for commercial production
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	</Layout>
)

export default Works
