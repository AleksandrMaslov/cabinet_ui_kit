import Checkbox from './Checkbox'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: 'Состояние элемента ввода',
      table: {
        category: 'Optional',
      },
    },
    onChange: {
      description: 'Обработчик изменения состояния элемента ввода',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    name: {
      description:
        'Имя элемента ввода, связанное с отправляемыми формой данными',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    id: {
      description:
        'Используется для связывания со встроенным элементом "label"',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    label: {
      description: 'Подпись элемента ввода',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    color: {
      options: [
        'undefined',
        'green',
        'orange',
        'lightgreen',
        'blue',
        'milk',
        'white',
        'lightgrey',
        'grey',
      ],
      description: 'Цветовая схема компонента',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      description: 'Размер компонента',
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
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: undefined,
    size: undefined,
    checked: false,
    onChange: undefined,
    className: undefined,
  },
}

export const Size2em: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: undefined,
    size: '2em',
    checked: false,
    onChange: undefined,
    className: undefined,
  },
}

export const Green: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'green',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}

export const Orange: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'orange',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}

export const Blue: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'blue',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}

export const Lightgreen: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'lightgreen',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}

export const Milk: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'milk',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}

export const White: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'white',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}

export const Lightgrey: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'lightgrey',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}

export const Grey: Story = {
  args: {
    label: 'Label',
    name: undefined,
    id: undefined,
    color: 'grey',
    size: undefined,
    checked: true,
    onChange: undefined,
    className: undefined,
  },
}
