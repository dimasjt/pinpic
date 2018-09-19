import * as React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Collapse,
} from 'reactstrap'
import styled from 'styled-components'
import { withStateHandlers, StateHandler, StateHandlerMap } from 'recompose'

interface CollapseCardProps {
  title: string
  children: JSX.Element
}

interface StateProps {
  isOpen: boolean
}

type StateHandlerProps = StateHandlerMap<StateProps> & {
  toggle(): StateHandler<StateProps>
}

type EnhancedCollapseCardProps =
  CollapseCardProps &
  StateProps &
  StateHandlerProps

const Title = styled(CardHeader)`
  cursor: pointer;
`

const CollapseCard: React.SFC<EnhancedCollapseCardProps> = ({ toggle, isOpen, title, children }) => (
  <Card>
    <Title onClick={toggle}>
      {title}
    </Title>
    <Collapse isOpen={isOpen}>
      <CardBody>
        {children}
      </CardBody>
    </Collapse>
  </Card>
)

const enhance = withStateHandlers<StateProps, StateHandlerProps, CollapseCardProps>({
  isOpen: true,
}, {
  toggle: ({ isOpen }) => () => ({ isOpen: !isOpen })
})



export default enhance(CollapseCard)
