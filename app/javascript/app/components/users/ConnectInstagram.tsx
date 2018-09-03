import * as React from 'react'
import {
  Button
} from 'reactstrap'

const ConnectInstagram = ({ page, connectInstagramByPage }) => (
  <li>
    {page.name}
    {
      page.instagram_id ? 'Connected' : (
        <Button onClick={() => connectInstagramByPage()}>
          Connect With Instagram
        </Button>
      )
    }
  </li>
)

export default ConnectInstagram
