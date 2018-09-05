import * as React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import { withConsumer } from '@context/PlaceShowContext'

import { Place } from '@types'

interface Props {
  place: Place
}

interface Photo {
  src: string
  width: number
  height: number
}

interface State {
  currentImage: number
  isOpen: boolean,
  photos: Photo[]
}

class PlaceGallery extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: 0,
      isOpen: false,
      photos: props.place.images.map(image => ({
        src: image.fileUrl,
        width: image.width,
        height: image.height
      }))
    }
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      isOpen: true,
    })
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      isOpen: false,
    })
  }

  gotoPrevious = () => {
    this.setState({ currentImage: this.state.currentImage - 1 })
  }

  gotoNext = () => {
    this.setState({ currentImage: this.state.currentImage + 1 })
  }

  goByThumbnail = (index) => {
    this.setState({ currentImage: index })
  }

  render() {
    return (
      <div>
        <Gallery photos={this.state.photos} onClick={this.openLightbox} />
        <Lightbox images={this.state.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClickThumbnail={this.goByThumbnail}
          currentImage={this.state.currentImage}
          isOpen={this.state.isOpen}
          showThumbnails
        />
      </div>
    )
  }
}

export default withConsumer(PlaceGallery)
