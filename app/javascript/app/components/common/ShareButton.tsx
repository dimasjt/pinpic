import * as React from 'react'
import { Button } from 'reactstrap'
import { FiFacebook, FiTwitter, FiHeart } from 'react-icons/fi'

const ShareButton = ({ type, url }) => (
  <Button outline color="primary">
    {
      (type === 'facebook' && <FiFacebook />) ||
      (type === 'twitter' && <FiTwitter />) ||
      (type === 'heart' && <FiHeart />)
    }
  </Button>
)

export default ShareButton
