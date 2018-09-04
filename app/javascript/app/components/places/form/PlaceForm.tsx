import * as React from 'react'
import {
  Form,
  Button,
} from 'reactstrap'
import Dropzone from 'react-dropzone'

import Input from '@components/forms/Input'
import Select from '@components/forms/Select'

const PlaceForm = ({ onSubmit, place, onChange, cities, tags, onDrop }) => (
  <Form onSubmit={onSubmit}>
    <Input
      label="Name"
      field="name"
      placeholder="Place name"
      type="text"
      value={place.name}
      onChange={onChange}
      errors={[]}
    />

    <Input
      label="Description"
      field="description"
      placeholder="Place description"
      type="textarea"
      value={place.description}
      onChange={onChange}
      errors={[]}
    />

    <Input
      label="Address"
      field="address"
      placeholder="Place address"
      type="text"
      value={place.address}
      onChange={onChange}
      errors={[]}
    />

    <Input
      label="Latitude"
      field="latitude"
      placeholder="Latitude"
      type="text"
      value={place.latitude}
      onChange={onChange}
      errors={[]}
    />

    <Input
      label="Longitude"
      field="longitude"
      placeholder="Longitude"
      type="text"
      value={place.longitude}
      onChange={onChange}
      errors={[]}
    />

    <Select
      label="City"
      options={cities.map(city => ({ label: city.name, value: city.id }))}
      onChange={({ value }) => onChange('cityId', value)}
      config={{}}
    />

    <Select
      label="Tags"
      options={tags.map(tag => ({ label: tag.name, value: tag.id }))}
      onChange={(selected) => onChange('tagIds', selected.map(t => t.value))}
      config={{ isMulti: true }}
    />

    <Dropzone
      onDrop={onDrop}
    />

    <Button onClick={onSubmit}>
      Save
    </Button>
  </Form>
)

export default PlaceForm
