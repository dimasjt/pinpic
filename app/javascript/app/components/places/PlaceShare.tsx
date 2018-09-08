import * as React from 'react'

import ShareButton from '@components/common/ShareButton'
import { withConsumer } from '@context/PlaceShowContext'

const PlaceShare = ({ wishlistPlace }) => (
  <div>
    <ShareButton type="facebook" url="" />
    <ShareButton type="twitter" url="" />
    <ShareButton type="heart" onClick={() => wishlistPlace()} />
  </div>
)

export default withConsumer(PlaceShare)
