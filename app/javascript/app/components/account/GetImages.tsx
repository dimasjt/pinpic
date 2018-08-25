import * as React from 'react'
import { Button } from 'reactstrap'

class GetImages extends React.Component {
  getImages = () => {

  }

  render() {
    return (
      <Button color="primary" className="btn btn-default" onClick={this.getImages}>
        Get My Photos
      </Button>
    )
  }
}

export default GetImages