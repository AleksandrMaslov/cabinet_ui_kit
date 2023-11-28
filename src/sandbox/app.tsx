import { FC } from 'react'

import { Button, Input, Logo } from '..'

const App: FC = () => {
  return (
    <div
      style={{
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Logo />

      <form
        style={{
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '600px',
        }}
      >
        <Input label="Input" placeholder="Place" bordered />
        <Input label="Input" placeholder="Place" required />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default App
