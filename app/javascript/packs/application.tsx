import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from '@app/App'

import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('root'))
})