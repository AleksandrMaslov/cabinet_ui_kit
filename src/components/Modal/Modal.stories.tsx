import { useState } from 'react'

import Button from '../Button/Button'

import Modal from './Modal'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  decorators: [
    (Story: StoryFn) => {
      const [isVisible, setVisible] = useState<boolean>(false)
      const clickHandler = () => {
        setVisible(!isVisible)
      }

      return (
        <div className="wrapper_preview">
          <Button
            label="SHOW"
            className="button_preview"
            onClick={clickHandler}
          />

          {isVisible && <Story isVisible={isVisible} setVisible={setVisible} />}
        </div>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isVisible: {
      description: 'Состояние видимости модального окна',
      table: {
        category: 'Required',
        defaultValue: { summary: 'undefined' },
      },
    },
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

export function Default(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: any,
  context: { isVisible: boolean; setVisible: () => void },
) {
  const { isVisible, setVisible } = context
  return (
    <Modal
      {...{
        children: 'Modal Content',
        isVisible: isVisible,
        setVisible: setVisible,
        className: undefined,
      }}
    >
      <h3>Заголовок формы</h3>

      <p>Содержание формы</p>
    </Modal>
  )
}
