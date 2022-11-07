import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Grid, GridItem, Flex, Heading, Box, ChakraProvider } from '@chakra-ui/react';
import { Search } from '../.';

import { SearchResult } from './components/SearchResult';

import { ExampleContext } from './context';
import { exampleData } from './data/data';
import { searchExampleByQuery } from './helper';
import { Example } from './interfaces';

const App = () => {
	const {
		cleanResults,
		finishSearch,
		isLoading,
		results,
		startSearch,
		updateSelection,
		value
	} = React.useContext( ExampleContext );

	const debounceRef = React.useRef<NodeJS.Timeout>();

	const onQueryChange = async ( { target }: React.ChangeEvent<HTMLInputElement> ) => {

		const value = target.value;

		startSearch( value );

		if ( debounceRef.current ) {
			clearTimeout( debounceRef.current );
		}

		debounceRef.current = setTimeout( async () => {

			if ( value.length === 0 ) {
				cleanResults();
				return;
			}

			// Data needs to have a "key", "id" or "_id" property
			const data = await searchExampleByQuery( value );

			finishSearch( data.map( ( value, idx ) => ( { ...value, key: idx } ) ) );

		}, 300 );

	};

	const handleResultSelect = ( value: Example ) => {

		updateSelection( value.title );

		console.log( { value } );

	};

	return (
		<Box p="15px">

			<Grid
				templateColumns='repeat(2, 1fr)'
				h='100vh'
				gap={ 6 }
			>

				<GridItem w='100%' >

					<Flex justifyContent="center" h="100%">
						<Search
							maxWidth="300px"
							top="25px"
							placeholder="Search example..."
							value={ value }
							isLoading={ isLoading }
							input={ { iconPosition: 'left' } }
							onSearchChange={ onQueryChange }
							searchResults={ results }
							resultRenderer={ example => <SearchResult example={ example } /> }
							onResultSelect={ handleResultSelect }
						/>
					</Flex>

				</GridItem>
				<GridItem w='100%'>

					<Box fontSize="13">
						<Heading>State</Heading>
						<pre style={ { overflowX: 'auto' } }>
							{ JSON.stringify( { isLoading, results, value }, null, 2 ) }
						</pre>
						<Heading>Options</Heading>
						<pre style={ { overflowX: 'auto' } }>
							{ JSON.stringify( exampleData, null, 2 ) }
						</pre>
					</Box>

				</GridItem>

			</Grid>
		</Box>
	);
};

ReactDOM.render(
	<ChakraProvider>
		<App />
	</ChakraProvider>,
	document.getElementById( 'root' )
);
