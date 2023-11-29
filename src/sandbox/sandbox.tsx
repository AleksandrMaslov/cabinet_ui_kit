import ReactDOM from 'react-dom/client'

import '../styles/_fonts.css'
import '../styles/_fonts_preview.css'
import '../styles/_reset.css'
import '../styles/_variables.css'

import App from './app'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
