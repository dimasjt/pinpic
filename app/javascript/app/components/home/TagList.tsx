import * as React from 'react'
import { compose, branch, withProps, renderComponent, mapProps } from 'recompose'
import Slider from 'react-slick'
import { graphql } from 'react-apollo'

import TagCard from '@components/tags/TagCard'
import tagsQuery from '@gql/query/tagsQuery'
import Loading from '@components/common/Loading'

import { Tag } from '@types'

interface Props {
  tags: Tag[]
  settings: any
}

const TagList: React.SFC<Props> = ({ tags, settings }) => (
  <div>
    <h3>Choose Category</h3>

    <Slider {...settings}>
      {
        tags.map(tag => (
          <TagCard key={tag.id} {...tag} />
        ))
      }
    </Slider>
  </div>
)

const enhance = compose(
  graphql(tagsQuery, { name: 'tagsQuery' }),
  withProps({
    settings: {
      infinte: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 6
    }
  }),
  branch(
    ({ tagsQuery }) => tagsQuery.loading,
    renderComponent(Loading),
  ),
  mapProps(({ settings, tagsQuery }) => ({
    settings,
    tags: tagsQuery.tags,
  }))
)

export default enhance(TagList)
