import * as React from 'react'

import Input from '@components/forms/Input'
import { withConsumer } from '@context/ProfileContext'
import ConnectInstagram from './ConnectInstagram';

const ChoosePage = ({ user, connectInstagramByPage }) => (
  <div>
    {
      user.pages.map(page => (
        <ConnectInstagram
          key={page.id}
          page={page}
          connectInstagramByPage={() => connectInstagramByPage(page)}
        />
      ))
    }
  </div>
)

export default withConsumer(ChoosePage)
