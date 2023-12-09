import { SpaceCard } from './SpaceCard'

import type { Meta, StoryFn, StoryObj } from '@storybook/react'

const meta: Meta<typeof SpaceCard> = {
  title: 'UI/SpaceCard',
  component: SpaceCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="mini">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    space: {
      control: 'object',
      description: 'Объект пространства',
      table: {
        category: 'Required',
        defaultValue: { summary: 'undefined' },
      },
    },
    onBookClick: {
      description: 'Обработчик события нажатия на кнопку "Забронировать"',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    onRequestClick: {
      description: 'Обработчик события нажатия на кнопку "Оставить заявку"',
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
} satisfies Meta<typeof SpaceCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    space: {
      name: 'Енисей',
      img: 'https://placehold.jp/600x600.png',
      area: '26,8 м2',
      workspaces: '5-6',
      screen: true,
      ownMeeting: false,
      options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5'],
      price: {
        short: '46 000 ₽/мес',
        medium: '120 000 ₽/квартал*',
        long: '560 000 ₽/год*',
      },
      sales: '* Специальные условия',
    },
    onBookClick: undefined,
    onRequestClick: undefined,
    className: undefined,
  },
}
