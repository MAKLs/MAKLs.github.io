import '../styles/globals.css'
import * as NextImage from 'next/image'
import { withTests } from '@storybook/addon-jest'
import results from '../.jest-test-results.json'

// Disable Nextjs's image optimization
const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

// Enable jest test results globally
export const decorators = [withTests({ results })]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
