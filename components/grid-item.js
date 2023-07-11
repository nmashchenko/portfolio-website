import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
export const GridItem = ({ children, href, title, thumbnail }) => (
	<Box w='100%' align='center'>
		<LinkBox cursor={'pointer'}>
			<Image
				src={thumbnail}
				alt={title}
				className='grid-item-thumbnail'
				placeholder='blur'
				loading='lazy'
			/>
			<LinkOverlay href={href} target='_blank'>
				<Text mt={2}>{title}</Text>
			</LinkOverlay>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
	<Box w={'100%'} align='center'>
		<LinkBox
			as={NextLink}
			cursor={'pointer'}
			href={`/works/${id}`}
			scroll={false}
		>
			<Image
				src={thumbnail}
				alt={title}
				className='grid-item-thumbnail'
				placeholder='blur'
			/>
			<LinkOverlay href={`/works/${id}`}>
				<Text mt={2} fontSize={20}>
					{title}
				</Text>
			</LinkOverlay>
			<Text fontSize={14}>{children}</Text>
		</LinkBox>
	</Box>
)

export const GridItemStyle = () => (
	<Global
		styles={`.grid-item-thumbnail {
		border-radius: 12px;
	}`}
	/>
)