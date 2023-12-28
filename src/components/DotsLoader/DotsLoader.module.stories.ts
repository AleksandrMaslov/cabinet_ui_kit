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
    className: {
      description: 'Имя внешнего CSS класса для позиционирования',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof DotsLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: undefined,
  },
}
