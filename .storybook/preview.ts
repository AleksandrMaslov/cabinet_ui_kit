import type { Preview } from '@storybook/react'
import '../src/styles/_fonts.css'
import '../src/styles/_fonts_preview.css'
import '../src/styles/_reset.css'
import '../src/styles/_variables.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
