import Marker from './Marker'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Marker> = {
  title: 'UI/Marker',
  component: Marker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Размер компонента',
      table: {
        category: 'Optional',
      },
    },
    tooltip: {
      description: 'Текст всплывающей подсказки',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
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
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: undefined,
    tooltip: undefined,
    className: undefined,
  },
}

export const Tooltiped: Story = {
  args: {
    tooltip: 'Tooltip',
  },
}
