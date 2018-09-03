import * as React from 'react'
import {
  Col,
  Form,
  Button,
} from 'reactstrap'
import Dropzone from 'react-dropzone'

import Input from '@components/forms/Input'
import Select from '@components/forms/Select'
import uploader from '@utils/uploader'
import { withConsumer } from '@context/ScheduleContext'
import DatePickerInput from '@components/forms/DatePickerInput'

import { User } from '@types'

const FiveMega = 10 ** 6 * 5

interface Props {
  setScheduleForm: any
  scheduleForm: any
  createSchedule: any
  user: User
}

class ScheduleForm extends React.Component<Props> {
  save = () => {
    this.props.createSchedule()
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    uploader(acceptedFiles[0])
      .then(({ data }) => {
        this.props.setScheduleForm('fileIds', [data.file_store.id])
      })
      .catch(error => {
        console.log(error)
      })
  }

  pageOptions = () => {
    return this.props.user.pages
      .filter(page => page.instagramId)
      .map(page => ({ label: page.name, value: page.id }))
  }

  render() {
    const { setScheduleForm, scheduleForm } = this.props

    return (
      <Col md={6}>
        <Form>
          <Input
            field="caption"
            type="textarea"
            placeholder="Caption post..."
            label="Caption"
            onChange={setScheduleForm}
            value={scheduleForm.caption}
            errors={[]}
          />

          <DatePickerInput
            label="Publish at"
            errors={[]}
            field="publishAt"
            selected={scheduleForm.publishAt}
            onChange={(date) => setScheduleForm('publishAt', date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
            className="form-control"
          />

          <Select
            label="Select Instagram Accounts"
            options={this.pageOptions()}
            config={{ isMulti: true }}
            onChange={(value) => setScheduleForm('pageIds', value.map(val => val.value))}
          />

          <Dropzone
            onDrop={this.onDrop}
            maxSize={FiveMega}
            multiple={false}
          />
        </Form>
      </Col>
    )
  }
}

export default withConsumer(ScheduleForm)
