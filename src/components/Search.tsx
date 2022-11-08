import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, Spinner, Box, Icon, BoxProps, InputRightElement, Flex, Text } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

interface Props extends BoxProps {
	value: string;
	isLoading: boolean;
	onSearchChange: ( event: React.ChangeEvent<HTMLInputElement> ) => void;
	resultRenderer: ( result: any ) => JSX.Element;
	onResultSelect: ( result: any ) => void;
	searchResults?: any[];
	placeholder?: string;
	input?: { iconPosition: 'left' | 'right'; };
	noResultFoundText?: string;
}

export const Search = ( props: Props ) => {

	const {
		value,
		isLoading,
		input,
		onSearchChange,
		resultRenderer,
		onResultSelect,
		placeholder = '',
		searchResults = [],
		noResultFoundText = 'No results found.',
		...rest
	} = props;

	const { iconPosition = 'left' } = input || {};

	const [ showResults, setShowResults ] = useState( false );

	const onBlur = () => {
		setTimeout( () => {
			setShowResults( false );
		}, 170 );
	};

	return (
		<Box
			position="relative"
			w="100%"
			{ ...rest }
		>
			<InputGroup mb="10px">
				{
					iconPosition === 'left' &&
					<InputLeftElement
						pointerEvents="none"
						children={
							isLoading
								? <Spinner size="sm" />
								: <Icon as={ FaSearch } />
						}
					/>
				}

				<Input
					borderColor="rgba(34,36,38,.15)"
					borderRadius="full"
					placeholder={ placeholder }
					value={ value }
					onChange={ onSearchChange }
					onFocus={ () => setShowResults( true ) }
					onBlur={ onBlur }
				/>

				{
					iconPosition === 'right' &&
					<InputRightElement
						pointerEvents="none"
						children={
							isLoading
								? <Spinner size="sm" />
								: <Icon as={ FaSearch } />
						}
					/>
				}
			</InputGroup>
			{
				showResults && (
					<Box
						bgColor="white"
						maxHeight="60vh"
						overflowY="auto"
						borderRadius="0.3em"
						boxShadow="0 2px 4px 0 rgb(34 36 38 / 12%), 0 2px 10px 0 rgb(34 36 38 / 15%);"
						sx={ {
							"&::-webkit-scrollbar": {
								display: 'none'
							}
						} }
					>
						{
							searchResults.length > 0
								? searchResults.map( result => (
									<Box
										key={ result.id || result._id || result.key }
										borderBottom="1px solid rgba(34,36,38,.1)"
										cursor="pointer"
										_hover={ {
											bgColor: '#f9fafb'
										} }
										onClick={ () => onResultSelect( result ) }
									>
										<Flex alignItems="center">
											<Box p="0.8em" margin="0" color="black">
												{ resultRenderer( result ) }
											</Box>
										</Flex>
									</Box>
								) )
								: value.length > 0 && !isLoading && (
									<Box
										borderBottom="1px solid rgba(34,36,38,.1)"
									>
										<Flex alignItems="center" >
											<Box p="0.8em" margin="0" color="black">
												<Text>{ noResultFoundText }</Text>
											</Box>
										</Flex>
									</Box>
								)
						}
					</Box >
				)
			}
		</Box>
	);
};