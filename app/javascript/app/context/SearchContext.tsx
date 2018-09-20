import * as React from 'react'
import { compose, graphql, QueryProps } from 'react-apollo'
import { branch, renderComponent } from 'recompose'

import { Place } from '@types'
import searchPlacesQuery from '@gql/query/searchPlacesQuery'
import Loading from '@components/common/Loading'

const Context = React.createContext({})

interface SearchContextProps {
  children: JSX.Element
  searchPlacesQuery: QueryProps & Response
}

interface SearchContextState {
  places: Place[]
  cityIds: string[]
  [field: string]: any
}

interface VariablesSearch {
  limit: number
  cityIds: string[]
}

class SearchContext extends React.Component<SearchContextProps, SearchContextState> {
  constructor(props) {
    super(props)

    this.state = {
      places: props.searchPlacesQuery.searchPlaces,
      cityIds: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchPlacesQuery !== this.props.searchPlacesQuery) {
      this.setState({
        places: nextProps.searchPlacesQuery.searchPlaces,
      })
    }
  }

  setFilter = (field, value) => (
    this.setState({ [field]: value })
  )

  setCities = (cityId: string) => {
    this.setState(({ cityIds }) => {
      const index = cityIds.findIndex(id => id === cityId)
      if (index > 0) {
        cityIds.splice(index, 1)
      } else {
        cityIds.push(cityId)
      }

      return { cityIds }
    })
  }

  render() {
    const value = {
      places: this.state.places,
      setFilter: this.setFilter,
      setCities: this.setCities,
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

const Provider = compose(
  graphql<{}, Response, VariablesSearch>(searchPlacesQuery, { name: 'searchPlacesQuery' }),
  branch(
    ({ searchPlacesQuery }) => searchPlacesQuery.loading,
    renderComponent(Loading)
  )
)(SearchContext)

export {
  Provider,
  withConsumer
}
