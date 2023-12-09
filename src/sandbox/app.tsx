import { FC, useState } from 'react'

import { Button, Icon, Img, Input, Logo, Marker, Modal, SpaceCard } from '..'

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
      <Marker tooltip="sasd" />

      <Icon icon="square" size="2.5rem" />
      <Icon icon="area" size="2.5rem" />

      <div style={{ width: '400px', height: '400px' }}>
        <Img />
      </div>

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
