import { addParameters } from '@storybook/vue';

addParameters({
  backgrounds: [
    { name: 'blue', value: '#00aced', default: true },
    { name: 'purple', value: '#3b5998' },
    { name: 'white', value: '#ffffff' }
  ],
});