import { FC } from 'react'

import { Anchor } from '..'

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
      <Anchor disabled>TEST</Anchor>
    </div>
  )
}

export default App
