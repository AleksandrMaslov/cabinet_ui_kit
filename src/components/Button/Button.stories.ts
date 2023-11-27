import Button from './Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        category: 'Required',
        type: { summary: 'string' },
      },
      description: 'Текстовое поле кнопки',
    },
    type: {
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
      description: 'Определяет поведение компонента в форме',
    },
    onClick: {
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
      description: 'Обработчик события нажатия на кнопку',
    },
    color: {
      options: ['undefined', 'black', 'green', 'lightgrey'],
      description: 'Цветовая схема компонента',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    inverted: {
      control: 'boolean',
      description: 'Инверсия цветовой схемы',
      table: {
        category: 'Optional',
        defaultValue: { summary: false },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['undefined', 'small'],
      description: 'Размер, определяемый внутренними отступами',
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Click Me',
    inverted: false,
    color: undefined,
    size: undefined,
    type: undefined,
    onClick: undefined,
    className: undefined,
  },
}

export const Small: Story = {
  args: {
    children: 'Click Me',
    size: 'small',
    inverted: false,
  },
}

export const Black: Story = {
  args: {
    children: 'Click Me',
    color: 'black',
    inverted: false,
  },
}

export const Green: Story = {
  args: {
    children: 'Click Me',
    color: 'green',
    inverted: false,
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

export const GreenInverted: Story = {
  args: {
    children: 'Click Me',
    color: 'green',
    inverted: true,
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

export const LightGrey: Story = {
  args: {
    children: 'Click Me',
    color: 'lightgrey',
    inverted: false,
  },
  parameters: {
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
}

export const LightGreyInverted: Story = {
  args: {
    children: 'Click Me',
    color: 'lightgrey',
    inverted: true,
  },
  parameters: {
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
}
