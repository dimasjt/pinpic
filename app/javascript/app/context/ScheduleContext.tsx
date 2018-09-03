import * as React from 'react'
import { Query, Mutation } from 'react-apollo'
import Alert from 'react-s-alert'
import * as moment from 'moment'

import { Schedule, User } from '@types'

import postSchedulesQuery from '@gql/query/postSchedulesQuery'
import createScheduleMutation from '@gql/mutation/createScheduleMutation'

const Context = React.createContext({})
const defaultState = {
  caption: '',
  publishAt: moment(),
  fileIds: [],
  pageIds: []
}

interface Props {
  children: JSX.Element
  postSchedules: any[]
  createSchedule: any
  user: User
}

interface State {
  schedules: Schedule[]
  scheduleForm: any
  newModalOpen: boolean
}

class ScheduleContext extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      schedules: props.postSchedules,
      scheduleForm: {...defaultState},
      newModalOpen: false,
    }
  }

  setScheduleForm = (field, value) => {
    this.setState(prevState => ({
      scheduleForm: {
        ...prevState.scheduleForm,
        [field]: value,
      }
    }))
  }

  createSchedule = () => {
    return new Promise((resolve, reject) => {
      this.props.createSchedule({ variables: this.state.scheduleForm })
        .then(({ data: { createSchedule } }) => {
          this.setState(({ schedules }) => ({
            schedules: schedules.concat(createSchedule.postSchedule),
            scheduleForm: {...defaultState},
            newModalOpen: false,
          }))
          Alert.success('Schedule successfully created')
          resolve(createSchedule.postSchedule)
        })
        .catch(error => {
          Alert.error('Cannot create schedule')
          console.log(error)
          reject(error)
        })
    })
  }

  toggleModal = () => {
    this.setState(prevState => ({ newModalOpen: !prevState.newModalOpen }))
  }

  render() {
    const value = {
      schedules: this.state.schedules,
      scheduleForm: this.state.scheduleForm,
      newModalOpen: this.state.newModalOpen,
      user: this.props.user,

      setScheduleForm: this.setScheduleForm,
      createSchedule: this.createSchedule,
      toggleModal: this.toggleModal,
    }

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const withConsumer = (Component: any) => (props: any) => (
  <Context.Consumer>
    {(context) => <Component {...{...context, ...props}} />}
  </Context.Consumer>
)

const Provider = (props: any) => (
  <Mutation mutation={createScheduleMutation}>
    {(createSchedule) => (
      <Query query={postSchedulesQuery}>
        {({ data: { postSchedules }, loading }) => (
          !loading && <ScheduleContext
            {...{
              ...props,
              postSchedules,
              createSchedule
            }}
          />
        )}
      </Query>
    )}
  </Mutation>
)

export {
  Provider,
  withConsumer,
}
