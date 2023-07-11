import { Container, Heading, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Posts = () => (
	<Layout title='Posts'>
		<Container>
			<Heading as='h4' fontSize={20} mb={4}>
				Popular Posts
			</Heading>
			<Section delay={0.1}>
				<Text align='center' fontSize={24}>
					Will be ready soon 😴{' '}
				</Text>
				{/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
					<GridItem
						title='test'
						thumbnail={test}
						href='test'
					/>
				</SimpleGrid> */}
			</Section>
		</Container>
	</Layout>
)

export default Posts
