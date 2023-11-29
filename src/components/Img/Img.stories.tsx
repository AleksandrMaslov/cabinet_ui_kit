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
    loader: {
      description: 'Путь к файлу изображения',
      table: {
        category: 'Optional',
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
    loader: false,
    className: undefined,
  },
}

export const Placeholder: Story = {
  args: {
    src: 'https://placehold.jp/600x600.png',
    loader: false,
    className: undefined,
  },
}

export const Loader: Story = {
  args: {
    src: undefined,
    loader: true,
    className: undefined,
  },
}

export const LoaderWithPlaceholder: Story = {
  args: {
    src: 'https://placehold.jp/600x600.png',
    loader: true,
    className: undefined,
  },
}
