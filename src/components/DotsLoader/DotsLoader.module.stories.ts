import DotsLoader from './DotsLoader'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DotsLoader> = {
  title: 'UI/DotsLoader',
  component: DotsLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [
        'undefined',
        'green',
        'orange',
        'lightgreen',
        'blue',
        'milk',
        'white',
        'lightgrey',
        'grey',
      ],
      description: 'Цветовая схема компонента',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      description: 'Имя внешнего CSS класса для позиционирования',
      table: {
        categolightgreyry: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof DotsLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: undefined,
    className: undefined,
  },
}

export const Green: Story = {
  args: {
    color: 'green',
    className: undefined,
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
    className: undefined,
  },
}

export const Lightgreen: Story = {
  args: {
    color: 'lightgreen',
    className: undefined,
  },
}

export const Blue: Story = {
  args: {
    color: 'blue',
    className: undefined,
  },
}

export const Milk: Story = {
  args: {
    color: 'milk',
    className: undefined,
  },
}

export const White: Story = {
  args: {
    color: 'white',
    className: undefined,
  },
  parameters: {
    backgrounds: {
      default: 'green',
      values: [
        {
          name: 'green',
          value: '#565b4f',
        },
      ],
    },
  },
}

export const Lightgrey: Story = {
  args: {
    color: 'lightgrey',
    className: undefined,
  },
  parameters: {
    backgrounds: {
      default: 'green',
      values: [
        {
          name: 'green',
          value: '#565b4f',
        },
      ],
    },
  },
}

export const Grey: Story = {
  args: {
    color: 'grey',
    className: undefined,
  },
  parameters: {
    backgrounds: {
      default: 'green',
      values: [
        {
          name: 'green',
          value: '#565b4f',
        },
      ],
    },
  },
}
