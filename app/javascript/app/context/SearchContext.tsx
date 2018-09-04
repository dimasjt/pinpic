import * as React from 'react'
import { Query } from 'react-apollo'

import { Place } from '@types'
import searchPlacesQuery from '@gql/query/searchPlacesQuery';

const Context = React.createContext({})

interface Props {
  children: JSX.Element
  searchPlaces: any
}

interface State {
  places: Place[]
}

class SearchContext extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      places: props.searchPlaces.data.searchPlaces,
    }
  }

  render() {
    const value = {
      places: this.state.places
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const withConsumer = (Component) => (props: any) => (
  <Context.Consumer>
    {(context) => <Component {...{...context, ...props}} />}
  </Context.Consumer>
)

const Provider = (props: any) => (
  <Query query={searchPlacesQuery}>
    {(searchPlaces) => (
      searchPlaces.loading ? null : (
        <SearchContext
          {...{
            ...props,
            searchPlaces,
          }}
        />
      )
    )}
  </Query>

)

export {
  Provider,
  withConsumer
}
