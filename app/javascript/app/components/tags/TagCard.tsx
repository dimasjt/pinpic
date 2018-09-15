import * as React from 'react'
import {
  Card,
  CardImg
} from 'reactstrap'

const TagCard = ({ tag }) => (
  <Card>
    <CardImg src="https://images.unsplash.com/photo-1520525388072-cd9e991a5e41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd0605a013714169fbc0aaab79790efd&auto=format&fit=crop&w=2089&q=80" />
  </Card>
)

export default TagCard
