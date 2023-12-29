import { useState } from 'react'

import Button from '../Button/Button'

import Modal from './Modal'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  decorators: [
    (Story: StoryFn) => {
      const [isModalOpened, setVisible] = useState<boolean>(false)
      const clickHandler = () => {
        setVisible(!isModalOpened)
      }

      return (
        <div className="wrapper_preview">
          <Button
            label="SHOW"
            className="button_preview"
            onClick={clickHandler}
          />

          {isModalOpened && (
            <Story isModalOpened={isModalOpened} setVisible={setVisible} />
          )}
        </div>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isModalOpened: {
      description: 'Состояние видимости модального окна',
      table: {
        category: 'Required',
        defaultValue: { summary: 'undefined' },
      },
    },
    setModalOpened: {
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
  context: { isModalOpened: boolean; setVisible: () => void },
) {
  const { isModalOpened, setVisible } = context
  return (
    <Modal
      {...{
        children: 'Modal Content',
        isModalOpened: isModalOpened,
        setModalOpened: setVisible,
        className: undefined,
      }}
    >
      <h3>Заголовок формы</h3>

      <p>Содержание формы</p>
    </Modal>
  )
}
