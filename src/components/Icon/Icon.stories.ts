import Icon from './Icon'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      table: {
        category: 'Required',
      },
      description: 'Ключ изображения компонента',
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
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Telegram: Story = {
  args: {
    icon: 'telegram',
  },
}

export const WhatsApp: Story = {
  args: {
    icon: 'whatsapp',
  },
}

export const Appliances: Story = {
  args: {
    icon: 'appliances',
  },
}

export const Area: Story = {
  args: {
    icon: 'area',
  },
}

export const Arrow: Story = {
  args: {
    icon: 'arrow',
  },
}

export const Baby: Story = {
  args: {
    icon: 'baby',
  },
}

export const Briefcase: Story = {
  args: {
    icon: 'briefcase',
  },
}

export const Camera: Story = {
  args: {
    icon: 'camera',
  },
}

export const Chat: Story = {
  args: {
    icon: 'chat',
  },
}

export const Coffee: Story = {
  args: {
    icon: 'coffee',
  },
}

export const Location: Story = {
  args: {
    icon: 'location',
  },
}

export const Lock: Story = {
  args: {
    icon: 'lock',
  },
}

export const Mail: Story = {
  args: {
    icon: 'mail',
  },
}

export const Meeting: Story = {
  args: {
    icon: 'meeting',
  },
}

export const Printer: Story = {
  args: {
    icon: 'printer',
  },
}

export const Projector: Story = {
  args: {
    icon: 'projector',
  },
}

export const Square: Story = {
  args: {
    icon: 'square',
  },
}

export const Trash: Story = {
  args: {
    icon: 'trash',
  },
}

export const WiFi: Story = {
  args: {
    icon: 'wifi',
  },
}

export const Workspace: Story = {
  args: {
    icon: 'workspace',
  },
}

export const Yoga: Story = {
  args: {
    icon: 'yoga',
  },
}
