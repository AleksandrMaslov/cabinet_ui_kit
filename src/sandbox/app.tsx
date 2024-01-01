import { FC, useState } from 'react'

import { Input } from '..'

const App: FC = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div
      style={{
        padding: '3rem',
        gap: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Input label="Input" placeholder="test" {...{ value, setValue }} />

      <Input
        label="Input"
        placeholder="test"
        icon="cross"
        {...{ value, setValue }}
      />

      <Input
        label="Input"
        placeholder="test"
        icon="eye"
        {...{ value, setValue }}
      />

      <Input
        label="Input"
        placeholder="test"
        icon="cross"
        bordered
        {...{ value, setValue }}
      />

      <Input label="Input" placeholder="test" icon="eye" bordered />
    </div>
  )
}

export default App
