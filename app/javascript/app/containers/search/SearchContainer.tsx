import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import SearchSideBar from '@components/search/SearchSideBar'
import SearchResult from '@components/search/SearchResult'

class SearchContainer extends React.Component {
  render() {
    return (
      <Row>
        <Col md={3}>
          <SearchSideBar />
        </Col>

        <Col md={9}>
          <SearchResult />
        </Col>
      </Row>
    )
  }
}

export default SearchContainer
