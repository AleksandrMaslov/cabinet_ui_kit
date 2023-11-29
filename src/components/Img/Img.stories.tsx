import Img from './Img'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

const meta: Meta<typeof Img> = {
  title: 'UI/Img',
  component: Img,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: '400px', height: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    src: {
      description: 'Путь к файлу изображения',
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
} satisfies Meta<typeof Img>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: undefined,
    className: undefined,
  },
}

export const Placeholder: Story = {
  args: {
    src: 'https://placehold.jp/600x600.png',
    className: undefined,
  },
}
