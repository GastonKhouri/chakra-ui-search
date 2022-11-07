import React from 'react';
import renderer from 'react-test-renderer';
import { Search } from '../../src/components/Search';

describe( 'SearchPlaceholder', () => {

	test( 'should show custom input placeholder', () => {

		const wrapper = renderer.create(
			<Search
				placeholder="Custom placeholder"
				value={ '' }
				isLoading={ false }
				searchResults={ [] }
				onSearchChange={ function ( event: React.ChangeEvent<HTMLInputElement> ): void {
					console.log( event );
					throw new Error( 'Function not implemented.' );
				} }
				resultRenderer={ function ( result: any ): JSX.Element {
					console.log( result );
					throw new Error( 'Function not implemented.' );
				} }
				onResultSelect={ function ( result: any ): void {
					console.log( result );
					throw new Error( 'Function not implemented.' );
				} }
			/>
		);

		expect( wrapper.toJSON() ).toMatchSnapshot();

	} );

	test( 'should show custom input value', () => {

		const wrapper = renderer.create(
			<Search
				value="Custom value"
				isLoading={ false }
				searchResults={ [] }
				onSearchChange={ function ( event: React.ChangeEvent<HTMLInputElement> ): void {
					console.log( event );
					throw new Error( 'Function not implemented.' );
				} }
				resultRenderer={ function ( result: any ): JSX.Element {
					console.log( result );
					throw new Error( 'Function not implemented.' );
				} }
				onResultSelect={ function ( result: any ): void {
					console.log( result );
					throw new Error( 'Function not implemented.' );
				} }
			/>
		);

		expect( wrapper.toJSON() ).toMatchSnapshot();

	} );

} );