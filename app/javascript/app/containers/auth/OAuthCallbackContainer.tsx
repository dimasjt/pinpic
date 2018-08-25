import * as React from 'react'
import queryString from 'query-string'
import { Mutation } from 'react-apollo'

import oauthMutation from '@gql/mutation/oauthMutation'

import history from '@utils/history'

interface Props {
  oauth: any
}

class OauthCallbackContainer extends React.Component<Props, {}> {
  componentDidMount() {
    const parsed = queryString.parse(location.search)
    this.props.oauth({ variables: { code: parsed.code, state: parsed.state || '' } })
      .then((data) => {
        console.log('data', data)
      })
      .catch(errors => {
        console.log(errors)
      })
  }
  render() {
    return (
      <div>
        Calback
      </div>
    )
  }
}

export default () => (
  <Mutation mutation={oauthMutation}>
    {(oauth) => (
      <OauthCallbackContainer oauth={oauth} />
    )}
  </Mutation>
)