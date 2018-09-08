import * as React from 'react'
import { Button } from 'reactstrap'
import { FiFacebook, FiTwitter, FiHeart } from 'react-icons/fi'

interface Props {
  type: string
  url?: string
  onClick?: any
}

const ShareButton: React.StatelessComponent<Props> = ({ type, url, onClick }) => (
  <Button outline color="primary" onClick={onClick}>
    {
      (type === 'facebook' && <FiFacebook />) ||
      (type === 'twitter' && <FiTwitter />) ||
      (type === 'heart' && <FiHeart />)
    }
  </Button>
)

export default ShareButton
