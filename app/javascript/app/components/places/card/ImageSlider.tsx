import * as React from 'react'
import Slider from 'react-slick'

const config = {
  arrows: true,
}

const ImageSlider = ({ images }) => (
  <div style={{ width: '40%' }}>
    <Slider {...config}>
      {
        images.map(image => (
          <img key={image.id} src={image.fileUrl} width="100%" />
        ))
      }
    </Slider>
  </div>
)

export default ImageSlider
