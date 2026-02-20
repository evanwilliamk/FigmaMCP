import type { Preview } from '@storybook/react';
import React from 'react';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light-gray',
      values: [
        {
          name: 'light-gray',
          value: '#DCDCDC',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#292929',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <Provider theme={defaultTheme} colorScheme="light">
        <div style={{ padding: '40px' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default preview;
