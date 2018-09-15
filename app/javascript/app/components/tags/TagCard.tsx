import * as React from 'react'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap'

import { Tag } from '@types'

const TagCard: React.SFC<Tag> = ({ name, image }) => (
  <Card>
    <CardImg src={image.fileUrl} alt={name} />
    <CardImgOverlay>
      <CardTitle>{name}</CardTitle>
    </CardImgOverlay>
  </Card>
)

export default TagCard
