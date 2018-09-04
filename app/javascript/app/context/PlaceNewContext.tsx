import * as React from 'react'
import { compose, graphql } from 'react-apollo'
import Alert from 'react-s-alert'

import uploader from '@utils/uploader'
import citiesQuery from '@gql/query/citiesQuery';
import tagsQuery from '@gql/query/tagsQuery'
import createPlaceMutation from '@gql/mutation/createPlaceMutation'

const defaultState = {
  name: '',
  description: '',
  address: '',
  cityId: '',
  tagIds: [],
  fileIds: [],
  latitude: '',
  longitude: ''
}

interface Props {
  citiesQuery: any
  tagsQuery: any
  createPlace: any
}

interface State {
  placeForm: any
}

const Context = React.createContext({})

class PlaceNewContext extends React.Component<Props, State> {
  state = {
    placeForm: { ...defaultState }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createPlace({ variables: this.state.placeForm })
      .then(({ data })=> {
        if (data.createPlace.errors.length) {
          console.log(data)
          Alert.error('Failed to create')
        } else {
          Alert.success('Successfully create place')
          this.setState({ placeForm: defaultState })
        }
      })
  }

  onChange = (field, value) => {
    this.setState(prev => ({
      placeForm: {
        ...prev.placeForm,
        [field]: value
      }
    }))
  }

  onDrop = (acceptedFiles, _rejectedFiles) => {
    uploader(acceptedFiles)
      .then(({ data: { file_stores } }) => {
        this.setState(({ placeForm }) => ({
          placeForm: {
            ...placeForm,
            fileIds: placeForm.fileIds.concat(file_stores.map(f => f.id))
          }
        }))
      })
      .catch(error => console.log(error))
  }

  render() {
    const value = {
      placeForm: this.state.placeForm,

      cities: this.props.citiesQuery.cities,
      tags: this.props.tagsQuery.tags,

      onChange: this.onChange,
      onSubmit: this.onSubmit,
      onDrop: this.onDrop,
    }
    if (this.props.citiesQuery.loading || this.props.tagsQuery.loading)
      return null

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const Provider = compose(
  graphql(citiesQuery, { name: 'citiesQuery' }),
  graphql(tagsQuery, { name: 'tagsQuery' }),
  graphql(createPlaceMutation, { name: 'createPlace' })
)(PlaceNewContext)

const withConsumer = (Component) => (props) => (
  <Context.Consumer>
    {(context) => <Component {...{...context, ...props}} />}
  </Context.Consumer>
)

export {
  Provider,
  withConsumer,
}
