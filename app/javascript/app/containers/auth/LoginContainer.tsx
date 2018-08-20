import * as React from 'react'
import {
  Row,
  Col,
} from 'reactstrap'
import { Mutation } from 'react-apollo'

import LoginCard from '@components/auth/LoginCard'

import loginMutation from '@gql/mutation/loginMutation'

const LoginContainer = () => (
  <Mutation mutation={loginMutation}>
    {(loginAction) => (
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <LoginCard loginAction={loginAction} />
        </Col>
      </Row>
    )}
  </Mutation>
)

// const LoginContainer = () => (
//   <Row>
//     <Col md={{ size: 6, offset: 3 }}>
//       <LoginCard />
//     </Col>
//   </Row>
// )

export default LoginContainer