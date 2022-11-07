# chakra-ui-search

<span>This is a simple search component for <a href="https://chakra-ui.com/" target="_blank">Chakra UI</a> inspired in <a href="https://react.semantic-ui.com/modules/search/" target="_blank">Semantic UI Search</a>.</span>
<br />
<br />

[![MIT License](https://badgen.net/github/license/gastonkhouri/chakra-ui-search 'MIT License')](LICENSE.md)
![screenshot](https://i.imgur.com/IjCMA7y.gif)

## Installation

Yarn:

```bash
yarn add chakra-ui-search
```

NPM:

```bash
npm i chakra-ui-search
```

### Basic Usage Example
```jsx
import { Search } from 'chakra-ui-search'

export const SearchExample = () => {

  // Some logic...

  return (
    <Search
      placeholder="Search book..."
      value={ value }
      isLoading={ isLoading }
      input={ { iconPosition: 'left' } }
      onSearchChange={ onValueChange }
      searchResults={ results }
      resultRenderer={ book => <SearchResult book={ book } /> }
      onResultSelect={ handleResultSelect }
    />
  )

}
```

## Props

> Note: The `Search` component extend the Chakra UI `Box` component so they accept all the default styling props.

| Prop                    | Type                                 | Required | Description                                                                           | Default                   |
|-------------------------|--------------------------------------|----------|---------------------------------------------------------------------------------------|---------------------------|
| **`value`**             | string                               | yes      | Input value                                                                           | undefined                 |
| **`isLoading`**         | boolean                              | yes      | Is loading results                                                                    | undefined                 |
| **`onSearchChange`**    | ( event: React.ChangeEvent ) => void | yes      | Action to execute when changing the input value                                       | undefined                 |
| **`resultRenderer`**    | ( result: any ) => JSX.Element       | yes      | Element that will be rendered to display the result                                   | undefined                 |
| **`onResultSelect`**    | ( result: any ) => void              | yes      | Action to execute when selecting a result                                             | undefined                 |
| **`searchResults`**     | any[]                                | no       | Array of search results, Each item needs to have at least one id, _id or key property | []                        |
| **`placeholder`**       | string                               | no       | Input placeholder                                                                     | ''                        |
| **`input`**             | { iconPosition: 'left' \| 'right'; } | no       | Input configuration, for now you can only change its position                         | { iconPosition = 'left' } |
| **`noResultFoundText`** | string                               | no       | Text displayed when there are no results                                              | 'No results found.'       |