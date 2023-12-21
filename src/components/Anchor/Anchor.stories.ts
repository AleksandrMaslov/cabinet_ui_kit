import Anchor from './Anchor'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Anchor> = {
  title: 'UI/Anchor',
  component: Anchor,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'lightgrey',
      values: [
        {
          name: 'lightgrey',
          value: '#e6e6e6',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        category: 'Required',
        type: { summary: 'ReactNode' },
      },
      description: 'Текстовое поле кнопки',
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
      description: 'Обработчик события нажатия на ссылку',
    },
    lineColor: {
      options: ['undefined', 'white', 'orange'],
      description: 'Цвет линии подчеркивания',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    underlined: {
      control: 'boolean',
      description: 'Видимость подчеркивания ссылки',
      table: {
        category: 'Optional',
        defaultValue: { summary: false },
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
} satisfies Meta<typeof Anchor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Anchor',
    href: undefined,
    target: undefined,
    onClick: undefined,
    underlined: false,
  },
}

export const Underlined: Story = {
  args: {
    children: 'Anchor',
    underlined: true,
  },
}

export const White: Story = {
  args: {
    children: 'Anchor',
    lineColor: 'white',
    underlined: true,
  },
}

export const Orange: Story = {
  args: {
    children: 'Anchor',
    lineColor: 'orange',
    underlined: true,
  },
}
