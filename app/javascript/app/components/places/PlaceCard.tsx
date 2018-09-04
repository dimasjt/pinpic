import * as React from 'react'
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Col,
} from 'reactstrap'
import { Link } from 'react-router-dom'

const PlaceCard = ({ place, size }) => (
  <Col md={size.md}>
    <Card tag={Link} to={`/places/${place.slug}`}>
      <CardImg
        top
        width="100%"
        src={place.images[0].fileUrl}
        alt={place.name}
      />
      <CardBody>
        <CardTitle>{place.name}</CardTitle>
        <CardText>{place.description}</CardText>
        <CardText>
          <small>{place.city.name}</small>
        </CardText>
      </CardBody>
    </Card>
  </Col>
)

export default PlaceCard
