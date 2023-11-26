import ReactDOM from 'react-dom/client'

import Icon from './components/Icon/Icon'

import { Button } from '.'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)
root.render(
  <div
    style={{
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
  >
    <div style={{ display: 'flex' }}>
      <Icon icon="appliances" />
      <Icon icon="baby" />
      <Icon icon="briefcase" />
      <Icon icon="camera" />
      <Icon icon="chat" />
      <Icon icon="coffee" />
      <Icon icon="location" />
      <Icon icon="lock" />
    </div>

    <div style={{ display: 'flex' }}>
      <Icon icon="mail" />
      <Icon icon="printer" />
      <Icon icon="square" />
      <Icon icon="telegram" />
      <Icon icon="trash" />
      <Icon icon="whatsapp" />
      <Icon icon="wifi" />
      <Icon icon="yoga" />
    </div>

    <Button>TEST</Button>
    <Button inverted>TEST</Button>
    <p>PPPPP</p>
    <h1>PPPPP</h1>
  </div>,
)
