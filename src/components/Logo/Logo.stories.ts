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
      description: 'Высота логотипа',
      table: {
        category: 'Optional',
      },
    },
    href: {
      description: 'Гипертекстовая ссылка',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    target: {
      description: 'Определяет окно открытия гиперссылки / якоря',
      options: ['_blank', '_self', '_parent', '_top'],
      table: {
        category: 'Optional',
        defaultValue: { summary: '_self' },
      },
    },
    onClick: {
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
      description: 'Обработчик события нажатия на логотип',
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
  args: {
    height: undefined,
    color: undefined,
    href: undefined,
    target: undefined,
    onClick: undefined,
    className: undefined,
  },
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
