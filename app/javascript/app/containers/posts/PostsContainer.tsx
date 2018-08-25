import * as React from 'react'
import { Query } from 'react-apollo'

import PostCard from '@components/posts/PostCard'
import postsQuery from '@gql/query/postsQuery'

import { Post } from '@types'

interface Props {
  posts: [Post]
}

class PostsContainer extends React.Component<Props, {}> {
  render() {
    const { posts} = this.props

    return (
      <div>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    )
  }
}

export default () => (
  <Query query={postsQuery}>
    {({ data }) => (
      <PostsContainer posts={data.posts || []} />
    )}
  </Query>
)