import * as React from 'react'
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap'


const LoginCard = () => (
  <Card>
    <CardHeader>Login</CardHeader>
    <CardBody>
      <CardTitle>Login to PinPic</CardTitle>

      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Your email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Your password" />
        </FormGroup>

        <Button>Login</Button>
      </Form>
    </CardBody>
  </Card>
)

export default LoginCard