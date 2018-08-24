import * as React from 'react'
import queryString from 'query-string'
import { Mutation } from 'react-apollo'

import history from '@utils/history'

class OmniauthCallback extends React.Component {
  componentDidMount() {
    const parsed = queryString.parse(location.search)
    history
    debugger
  }
  render() {
    return (
      <div>
        Calback
      </div>
    )
  }
}

export default OmniauthCallback