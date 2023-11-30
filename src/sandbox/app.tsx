import { FC, useState } from 'react'

import { Anchor, Button, Input, Logo, Modal, SpaceCard } from '..'

import { space } from './data/space.ts'

const App: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <div
      style={{
        padding: '3rem',
        gap: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Logo />

      <Anchor>TEST</Anchor>

      <Button
        label="Visible"
        onClick={() => {
          setVisible(true)
        }}
      />

      <SpaceCard space={space} />

      {visible && (
        <Modal title="Связаться с нами" setVisible={setVisible}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <Input label="Input" placeholder="Place" bordered />
            <Input label="Input" placeholder="Place" required />

            <Button label="Submit" type="submit" />
          </form>
        </Modal>
      )}
    </div>
  )
}

export default App
