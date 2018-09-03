import * as React from 'react'

import { Place } from '@types'

const Context = React.createContext({})

interface Props {
  children: JSX.Element
}

interface State {
  places: Place[]
}

class SearchContext extends React.Component<Props, State> {
  state = {
    places: []
  }

  render() {
    const value = {

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
  <SearchContext {...props} />
)

export {
  Provider,
  withConsumer
}
