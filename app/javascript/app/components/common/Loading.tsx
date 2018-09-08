import * as React from 'react'
import { BounceLoader } from 'react-spinners'

const Loading = () => (
  <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
    <div style={{ margin: "200px auto", width: 50 }}>
      <BounceLoader
        size={50}
        color='#ccc'
    />
    </div>
  </div>
)

export default Loading
