import type { Schema } from '@markdoc/markdoc';

export const tags: Record<string, Schema> = {
  'split': {
    render: 'Split',
  },
  br: {
    render: 'Break',
    selfClosing: true,
  },
   quiz: {
    attributes: {
      questions: {
        type: 'Object',
        required: true,
      },
    },
    render: 'Quiz', // please make sure to export it in components.ts,
    selfClosing: true,
  },
}