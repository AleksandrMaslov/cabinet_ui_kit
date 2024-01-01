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
    password: {
      description: 'Определение типа элемента ввода password',
      table: {
        category: 'Optional',
      },
    },
    icon: {
      description: 'Отображение иконки внутри элемента ввода',
      table: {
        category: 'Optional',
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
    password: false,
    icon: undefined,
  },
}

export const Bordered: Story = {
  args: {
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
    password: false,
    icon: undefined,
  },
}

export const Iconed: Story = {
  args: {
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
    password: false,
    icon: 'cross',
  },
}

export const PasswordInput: Story = {
  args: {
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
    password: false,
    icon: 'cross',
  },
}

export const PasswordInputToggle: Story = {
  args: {
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
    password: true,
    icon: 'eye',
  },
}
