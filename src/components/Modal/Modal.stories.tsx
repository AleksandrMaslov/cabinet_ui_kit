import { useState } from 'react'

import Button from '../Button/Button'

import Modal from './Modal'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  decorators: [
    (Story: StoryFn) => {
      const [visible, setVisible] = useState<boolean>(false)
      const clickHandler = () => {
        setVisible(!visible)
      }

      return (
        <div className="wrapper_preview">
          <Button
            label="SHOW"
            className="button_preview"
            onClick={clickHandler}
          />

          {visible && <Story setVisible={setVisible} />}
        </div>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    setVisible: {
      description: 'Функция управления состоянием видимости',
      table: {
        category: 'Required',
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      description: 'Контент модального окна',
      table: {
        category: 'Optional',
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      description:
        'Имя внешнего CSS класса для переопределния стилей модального окна',
      table: {
        category: 'Optional',
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<typeof Modal>

export default meta

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Default(args: any, context: { setVisible: any }) {
  const { setVisible } = context
  return (
    <Modal
      {...{
        children: 'Modal Content',
        setVisible: undefined,
        className: undefined,
      }}
      setVisible={setVisible}
    >
      <h3>Заголовок формы</h3>

      <p>Содержание формы</p>
    </Modal>
  )
}
