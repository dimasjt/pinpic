import * as React from 'react'
import { compose, graphql } from 'react-apollo'

import { Place } from '@types'
import searchPlacesQuery from '@gql/query/searchPlacesQuery';
import Loading from '@components/common/Loading';

const Context = React.createContext({})

interface Props {
  children: JSX.Element
  searchPlacesQuery: any
}

interface State {
  places: Place[]
}

class SearchContext extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      places: props.searchPlacesQuery.searchPlaces,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchPlacesQuery !== this.props.searchPlacesQuery) {
      this.setState({
        places: nextProps.searchPlacesQuery.searchPlaces,
      })
    }
  }

  render() {
    if (this.props.searchPlacesQuery.loading)
      return <Loading />

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

const Provider = compose(
  graphql(searchPlacesQuery, { name: 'searchPlacesQuery' }),
)(SearchContext)

export {
  Provider,
  withConsumer
}
