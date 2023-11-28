import { FC, useState } from 'react'

import { Button, Input, Logo, Modal } from '..'

const App: FC = () => {
  const [visible, setVisible] = useState<boolean>(false)

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

      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        Visible
      </Button>

      {visible && (
        <Modal title="Связаться с нами" setVisible={setVisible}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Input label="Input" placeholder="Place" bordered />
            <Input label="Input" placeholder="Place" required />

            <Button type="submit">Submit</Button>
          </form>
        </Modal>
      )}
    </div>
  )
}

export default App
