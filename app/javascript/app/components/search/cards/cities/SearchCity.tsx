import * as React from 'react'
import { Input, FormGroup } from 'reactstrap'
import { lifecycle } from 'recompose'

interface SearchCityProps {
  query: string
  setQuery(query: string): void
}

const SearchCity: React.SFC<SearchCityProps> = ({ query, setQuery }) => (
  <div>
    <FormGroup>
      <Input
        type="text"
        placeholder="search city"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
    </FormGroup>
  </div>
)

const enhance = lifecycle({
  shouldComponentUpdate<SearchCityProps>(nextProps) {
    return nextProps.query !== this.props.query
  }
})

export default enhance(SearchCity)
