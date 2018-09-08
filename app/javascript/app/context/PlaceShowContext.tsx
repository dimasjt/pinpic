import * as React from 'react'
import { graphql, compose } from 'react-apollo'
import Alert from 'react-s-alert'

import placeQuery from '@gql/query/placeQuery'
import wishlistPlaceMutation from '@gql/mutation/wishlistPlaceMutation'
import Loading from '@app/components/common/Loading'

interface Props {
  placeQuery: any,
  wishlistPlace: any
}

const Context = React.createContext({})

class PlaceShowContext extends React.Component<Props> {
  wishlistPlace = () => {
    this.props.wishlistPlace()
      .then(({ data: { wishlistPlace } }) => {
        if (wishlistPlace.errors) {
          Alert.error('Failed to create wishlist')
        } else {
          if (wishlistPlace.state === 'created') {
            Alert.success('Place added to wishlist')
          } else {
            Alert.success('Place removed from wishlist')
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (this.props.placeQuery.loading)
      return <Loading />

    const value = {
      place: this.props.placeQuery.place,
      wishlistPlace: this.wishlistPlace,
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

// const Provider = (props) => (
//   <Query query={placeQuery} variables={props.params}>
//     {(placeQuery) => (
//       placeQuery.loading ? null : (
//         <PlaceShowContext
//           {...{
//             ...props,
//             placeQuery,
//           }}
//         />
//       )
//     )}
//   </Query>
// )

interface ProviderProps {
  params: {
    id: string
  }
}

const Provider = compose(
  graphql(placeQuery, {
    name: 'placeQuery',
    options: (props: ProviderProps) => ({
      variables: props.params,
    })
  }),
  graphql(wishlistPlaceMutation, {
    name: 'wishlistPlace',
    options: (props: ProviderProps) => ({
      variables: { placeId: props.params.id }
    })
  })
)(PlaceShowContext)

const withConsumer = (Component) => (props) => (
  <Context.Consumer>
    {(context) => <Component {...{...context, ...props}} />}
  </Context.Consumer>
)

export {
  Provider,
  withConsumer,
}
