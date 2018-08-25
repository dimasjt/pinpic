import * as React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap'

const PostCard = ({ thumbnail, caption }) => (
  <Card>
    <CardImg top width="100%" src={thumbnail} />
    <CardBody>
      <CardText>
        {caption}
      </CardText>
    </CardBody>
  </Card>
)

export default PostCard