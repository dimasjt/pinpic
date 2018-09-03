import * as React from 'react'
import { Login } from 'react-facebook'
import {
  Button
} from 'reactstrap'

import { withConsumer } from '@context/ProfileContext'

const ConnectAccount = ({ connectFacebook }) => (
  <div>
    <Login
      scope="public_profile,email,pages_show_list,publish_pages,manage_pages,instagram_basic,instagram_manage_comments"
      onError={(error) => console.log(error)}
      onResponse={(response) => connectFacebook(response)}
    >
      <Button color="info">
        Connect with Facebook
      </Button>
    </Login>
  </div>
)

export default withConsumer(ConnectAccount)
