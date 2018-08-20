import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import testFieldQuery from '@app/gql/query/testFieldQuery'

interface Props {}

class HomeContainer extends React.Component<Props> {
  render() {
    return (
      <div>HomeContainer</div>
    )
  }
}

export default (props: Props) => (
  <Query query={testFieldQuery}>
    {(apollo) => {
      console.log(apollo)
      return (
        <HomeContainer {...props} />
      )
    }}
  </Query>
)