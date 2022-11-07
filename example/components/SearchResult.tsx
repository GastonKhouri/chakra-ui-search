import { Box, Flex, Text } from '@chakra-ui/react';

import { Example } from '../interfaces/interfaces';

interface Props {
	example: Example;
}

export const SearchResult = ( { example }: Props ) => {
	return (
		<Box>
			<Text fontWeight="bold">
				{ example.title }
			</Text>
			<Text color="#a2a2a2">
				{ example.description }
			</Text>
		</Box>
	);
};
