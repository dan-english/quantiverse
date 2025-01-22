import type { Schema } from '@markdoc/markdoc';

export const tags: Record<string, Schema> = {
  'split': {
    render: 'Split',
  },
  br: {
    render: 'Break',
    selfClosing: true,
  },
}