import * as React from 'react'
import {
  Row,
  Col,
  Container,
} from 'reactstrap'

import SearchSideBar from '@components/search/SearchSideBar'
import SearchResult from '@components/search/SearchResult'
import { Provider } from '@context/SearchContext'

class SearchContainer extends React.Component {
  render() {
    return (
      <Provider>
        <Container>
          <Row>
            <Col md={3}>
              <SearchSideBar />
            </Col>

            <Col md={9}>
              <SearchResult />
            </Col>
          </Row>
        </Container>
      </Provider>
    )
  }
}

export default SearchContainer
