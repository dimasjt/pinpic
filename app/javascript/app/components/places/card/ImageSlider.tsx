import * as React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import styledTs from 'styled-components-ts'

const config = {
  arrows: true,
  adaptiveHeight: false,
  dots: true,
}

interface Props {
  src?: string
}

const Image = styledTs<Props>(styled.div)`
  background-size: cover;
  background-image: url('${props => props.src}');
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
`

const ImageSlider = ({ images }) => (
  <div style={{ width: '40%' }}>
    <Slider {...config}>
      {
        images.map(image => (
          <Image key={image.id} src={image.fileUrl} />
        ))
      }
    </Slider>
  </div>
)

export default ImageSlider
