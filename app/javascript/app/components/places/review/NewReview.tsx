import * as React from 'react'
import {
  Form,
  Button,
  Input,
} from 'reactstrap'

import Rating from '@components/common/Rating'
import { Place } from '@types';

interface Props {
  createReview: any
  place: Place
}

const defaultState = {
  message: '',
  rating: 0,
}

class NewReview extends React.Component<Props> {
  state = { ...defaultState }

  onChange = (field, value) => {
    this.setState({ [field]: value })
  }

  createReview = (event) => {
    event.preventDefault()
    const variables = {
      ...this.state,
      placeId: this.props.place.id,
    }
    this.props.createReview({ variables })
      .then(() => this.setState({ ...defaultState }))
  }

  render() {
    return (
      <div>
        <Form>
          <Input
            placeholder="Write review for this place..."
            rows={4}
            type="textarea"
            value={this.state.message}
            onChange={(event) => this.onChange('message', event.target.value)}
          />

          <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 10 }}>
            <Button
              style={{ padding: '10px 50px' }}
              disabled={!(this.state.message && this.state.rating)}
              onClick={this.createReview}
            >
              POST
            </Button>

            <div style={{ marginRight: 10 }}>
              <h6>Give your rating</h6>
              <Rating
                initialRating={this.state.rating}
                onChange={(value) => this.onChange('rating', value)}
              />
            </div>
          </div>
        </Form>
      </div>
    )
  }
}

export default NewReview
