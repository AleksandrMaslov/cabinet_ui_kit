import { FC, useState } from 'react'

import { Button, Icon, Input, Logo, Marker, Modal, SpaceCard } from '..'

import { space } from './data/space'

const App: FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false)

  return (
    <div
      style={{
        padding: '3rem',
        gap: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Logo height="12.5rem" href="#" />

      <Icon icon="square" size="12.5rem" href="#" />
      <Icon icon="area" size="12.5rem" />

      <Button
        label="Visible"
        onClick={() => {
          setVisible(true)
        }}
      />

      <Marker coords={['50%', '']} />

      <SpaceCard space={space} />

      {isVisible && (
        <Modal isVisible={isVisible} setVisible={setVisible}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <h3>Связаться с нами</h3>

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
