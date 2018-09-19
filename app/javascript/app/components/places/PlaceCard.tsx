import * as React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { FiMapPin } from 'react-icons/fi'
import styled from 'styled-components'

import Rating from '@components/common/Rating'

import ImageSlider from './card/ImageSlider'

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const StyledCard = styled(Card)`
  display: flex !important;
  flex-direction: row !important;
  border-radius: 0 !important;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 1px 8px 0px #ccc;
  }
`

const Title = styled(CardTitle)`
  color: #333;
`

const Description =  styled(CardText)`
  color: #777;
`

const StyledCardBody = styled(CardBody)`
  padding: 20px;
  width: 60%;
`

const PlaceInfo = styled(CardText)`
  margin: 0;
`

const PlaceLocation = styled.small`
  margin-right: 10px;
`

const PlaceCard = ({ place, size }) => (
  <Col md={size.md} style={{ marginBottom: 10 }} className="place-card">
    <StyledCard>
      <StyledLink to={`/places/${place.slug}`} />
      <ImageSlider images={place.images} />
      <StyledCardBody>
        <Link to={`/places/${place.id}`}>
          <Title>{place.name}</Title>
        </Link>
        <Description>
          {place.description.substring(0, 100)}
        </Description>
        <PlaceInfo>
          <PlaceLocation>
            <FiMapPin /> {place.city.name}
          </PlaceLocation>

          <Rating
            initialRating={place.averageRating}
            size={20}
            readonly
          />
        </PlaceInfo>
      </StyledCardBody>
    </StyledCard>
  </Col>
)

export default PlaceCard
