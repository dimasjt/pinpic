import * as React from 'react'
import { Query } from 'react-apollo'

import placeQuery from '@gql/query/placeQuery'

interface Props {
  placeQuery: any
}

const Context = React.createContext({})

class PlaceShowContext extends React.Component<Props> {
  render() {
    const value = {
      place: this.props.placeQuery.data.place
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const Provider = (props) => (
  <Query query={placeQuery} variables={props.params}>
    {(placeQuery) => (
      placeQuery.loading ? null : (
        <PlaceShowContext
          {...{
            ...props,
            placeQuery,
          }}
        />
      )
    )}
  </Query>
)

const withConsumer = (Component) => (props) => (
  <Context.Consumer>
    {(context) => <Component {...{...context, ...props}} />}
  </Context.Consumer>
)

export {
  Provider,
  withConsumer,
}
