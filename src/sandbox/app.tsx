import { FC } from 'react'

import { Anchor, Checkbox } from '..'

const App: FC = () => {
  return (
    <div
      style={{
        width: '600px',
        padding: '3rem',
        gap: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Checkbox label="test" disabled />
      <Anchor disabled>TEST</Anchor>
    </div>
  )
}

export default App
