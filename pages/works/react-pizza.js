import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
	return (
		<Layout title='React Pizza'>
			<Container>
				<Title>
					React Pizza <Badge>2023</Badge>
				</Title>
				<P>
					A simple online shop with all needs skills to be Junior Frontend dev.
				</P>
				<List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href='test'>
							Test <ExternalLinkIcon mx={'2px'} />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Platform</Meta>
						<span>Windows/macOS/Linux/iOS/Andoid</span>
					</ListItem>
					<ListItem>
						<Meta>Stack</Meta>
						<span>Typescript, React, Redux Toolkit, RTK Query</span>
					</ListItem>
					{/* 
					//TODO - Сделать
					<ListItem>
						<Meta>Blogpost</Meta>
						<Link href='/test'>
							Test <ExternalLinkIcon mx={'2px'} />
						</Link>
					</ListItem> */}
				</List>

				<WorkImage src='/images/works/react-pizza.png' alt={'React Pizza'} />
				<WorkImage src='/images/works/react-pizza.png' alt={'React Pizza'} />
			</Container>
		</Layout>
	)
}

export default Work
