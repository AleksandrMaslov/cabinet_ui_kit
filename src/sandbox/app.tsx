import { FC } from 'react'

import { Anchor, Checkbox, Input } from '..'

const App: FC = () => {
  return (
    <div
      style={{
        margin: 'auto',
        display: 'block',
        width: '600px',
        padding: '3rem',
        gap: '2rem',
      }}
    >
      <Anchor>TEST</Anchor>
      <Input disabled icon="cross" />
      <Checkbox label="teste" disabled />
    </div>
  )
}

export default App
