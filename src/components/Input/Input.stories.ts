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
    disabled: {
      description: 'Состояние неактивности элемента ввода',
      table: {
        category: 'Optional',
      },
    },
    required: {
      description: 'Необходимость базовой валидации',
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
      description: 'Вариант отображения элемента ввода с внешними границами',
      table: {
        category: 'Optional',
      },
    },
    value: {
      description: 'Введенное значение',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
    type: {
      description: 'Тип элемента ввода',
      table: {
        category: 'Optional',
      },
    },
    setValue: {
      description: 'Функция управления значением элемента ввода',
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
      description: 'Идентификатор для связи со встроенным элементом "label"',
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
    error: {
      description:
        'Сообщение об ошибке, выводимое ниже элемента ввода при потере фокуса',
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
    bordered: false,
    className: undefined,
    disabled: false,
    required: false,
    autoComplete: 'off',
    value: undefined,
    setValue: undefined,
    error: 'Сообщение об ошибке',
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
    setValue: undefined,
    disabled: false,
    required: false,
    autoComplete: 'off',
    bordered: true,
    className: undefined,
    error: 'Сообщение об ошибке',
  },
}
