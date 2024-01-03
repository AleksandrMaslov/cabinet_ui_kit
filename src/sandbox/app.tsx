import { FC } from 'react'

import { Button } from '..'

const App: FC = () => {
  return (
    <div
      style={{
        padding: '3rem',
        gap: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button
        label="1"
        onClick={() => {
          console.log('click')
        }}
      />

      <Button
        label="2"
        isLoading
        onClick={() => {
          console.log('click2')
        }}
      />
    </div>
  )
}

export default App
