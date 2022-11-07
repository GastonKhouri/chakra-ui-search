import { exampleData } from '../data/data';
import { Example } from '../interfaces/interfaces';

// simulate a search from an API from local array
export const searchExampleByQuery = async ( query: string ) => {

	const results = await new Promise<Example[]>( ( resolve ) => {

		setTimeout( () => {

			const places = exampleData;

			const filteredPlaces = places.filter( ( example ) => {

				return example.title.toLowerCase().includes( query.toLowerCase() );

			} );

			resolve( filteredPlaces );

		}, 1000 );

	} );

	return results;

};