import * as React from 'react'

import { instagramAuthURL } from '@utils/oauth'

class LoginInstagram extends React.Component {
  login = () => {

  }

  render() {
    return (
      <div>
        <a href={instagramAuthURL()}>Login Instagram</a>
      </div>
    )
  }
}

export default LoginInstagram