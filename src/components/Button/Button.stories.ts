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
    },
    color: {
      options: ['undefined', 'black', 'green', 'lightgrey'],
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    inverted: {
      control: 'boolean',
      table: {
        category: 'Optional',
        defaultValue: { summary: false },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['undefined', 'small'],
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
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
