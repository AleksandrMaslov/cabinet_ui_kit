import Input from './Input'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description: 'Впомогательный текст в поле ввода данных',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    required: {
      description: 'Подпись элемента ввода',
      table: {
        category: 'Optional',
      },
    },
    autoComplete: {
      description: 'Автоматическое заполнение поля браузером',
      table: {
        category: 'Optional',
      },
    },
    bordered: {
      description: 'Подпись элемента ввода',
      table: {
        category: 'Optional',
      },
    },
    value: {
      description: 'Подпись элемента ввода',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    type: {
      description: 'Подпись элемента ввода',
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
    className: {
      description: 'Имя внешнего CSS класса для позиционирования',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    name: undefined,
    id: undefined,
    value: undefined,
    onChange: undefined,
    required: false,
    autoComplete: 'off',
    bordered: false,
    className: undefined,
  },
}

export const Bordered: Story = {
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
    name: undefined,
    id: undefined,
    value: undefined,
    onChange: undefined,
    required: false,
    autoComplete: 'off',
    bordered: true,
    className: undefined,
  },
}
