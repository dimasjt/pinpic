import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'

import SearchSideBar from '@components/search/SearchSideBar'
import SearchResult from '@components/search/SearchResult'
import { Provider } from '@context/SearchContext'

class SearchContainer extends React.Component {
  render() {
    return (
      <Provider>
        <Row>
          <Col md={3}>
            <SearchSideBar />
          </Col>

          <Col md={9}>
            <SearchResult />
          </Col>
        </Row>
      </Provider>
    )
  }
}

export default SearchContainer
