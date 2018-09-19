import * as React from 'react'
import {
  Row,
  Col,
  Container,
} from 'reactstrap'
import styled from 'styled-components'

import SearchSideBar from '@components/search/SearchSideBar'
import SearchResult from '@components/search/SearchResult'
import { Provider } from '@context/SearchContext'

const StyledContainer = styled(Container)`
  padding-top: 20px;
`

class SearchContainer extends React.Component {
  render() {
    return (
      <Provider>
        <StyledContainer>
          <Row>
            <Col md={3}>
              <SearchSideBar />
            </Col>

            <Col md={9}>
              <SearchResult />
            </Col>
          </Row>
        </StyledContainer>
      </Provider>
    )
  }
}

export default SearchContainer
