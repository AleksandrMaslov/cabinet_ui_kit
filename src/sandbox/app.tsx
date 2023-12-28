import { FC, useState } from 'react'

import { Button, Input, Modal } from '..'

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
      <Button
        label="Visible"
        onClick={() => {
          setVisible(true)
        }}
      />

      <Button
        label="Visible"
        onClick={() => {
          setVisible(true)
        }}
        isLoading
      />

      <Button
        label="Visible"
        onClick={() => {
          setVisible(true)
        }}
        disabled
      />

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
