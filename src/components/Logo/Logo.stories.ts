import Logo from './Logo'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
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
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['undefined', 'white'],
      description: 'Цветовая схема компонента',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      // control: 'inline-radio',
      options: ['undefined', 'small'],
      description: 'Размер, определяемый внутренними отступами',
      table: {
        category: 'Optional',
        // defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      description: 'Имя внешнего CSS класса для позиционирования',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const White: Story = {
  args: {
    color: 'white',
  },
}

export const Height1em: Story = {
  args: {
    height: '1em',
  },
}
