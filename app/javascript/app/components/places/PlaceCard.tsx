import * as React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { FiClock, FiMapPin } from 'react-icons/fi'

import Rating from '@components/common/Rating'

import ImageSlider from './card/ImageSlider'

const PlaceCard = ({ place, size }) => (
  <Col md={size.md} style={{ marginBottom: 10 }}>
    <Card to={`/places/${place.slug}`} style={{ display: 'flex', flexDirection: 'row', borderRadius: 0 }}>
      <ImageSlider images={place.images} />
      <CardBody style={{ width: '60%' }}>
        <Link to={`/places/${place.id}`}>
          <CardTitle>{place.name}</CardTitle>
        </Link>
        <CardText>{place.description.substring(0, 120)}</CardText>
        <CardText>
          <small>
            <FiMapPin /> {place.city.name}
          </small>
          {' '}
          <small>
            <FiClock /> 10AM - 21PM
          </small>
        </CardText>
        <Rating
          initialRating={2}
        />
      </CardBody>
    </Card>
  </Col>
)

export default PlaceCard
