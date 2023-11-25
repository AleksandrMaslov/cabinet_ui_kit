import ReactDOM from 'react-dom/client'

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
    <Button>TEST</Button>
    <Button inverted>TEST</Button>
    <Button color="black">TEST</Button>
    <Button color="black" inverted>
      TEST
    </Button>
    <Button color="green">TEST</Button>
    <Button color="green" inverted>
      TEST
    </Button>
    <Button color="lightgrey">TEST</Button>
    <Button color="lightgrey" inverted>
      TEST
    </Button>
  </div>,
)
