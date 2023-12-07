import Marker from './Marker'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

const meta: Meta<typeof Marker> = {
  title: 'UI/Marker',
  component: Marker,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ height: '200px', display: 'grid', placeContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
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
    coords: {
      description: 'Координаты маркера для абсолютного позиционирования',
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
    coords: undefined,
    className: undefined,
  },
}

export const Tooltiped: Story = {
  args: {
    tooltip: 'Tooltip',
  },
}

export const Positioned: Story = {
  args: {
    tooltip: "I'm Positioned",
    coords: ['-15rem', '40%'],
  },
}
