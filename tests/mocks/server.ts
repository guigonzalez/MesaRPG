import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Setup requests interceptor with the given handlers
export const server = setupServer(...handlers)