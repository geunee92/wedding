import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClientProvider, QueryClient } from 'react-query'

import './scss/global.scss'
import { ModalContext } from './contexts/ModalContext.tsx'
import FullScreenMessage from './components/shared/FullScreenMessage.tsx'
import { ErrorBoundary } from 'react-error-boundary'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContext>
        <ErrorBoundary fallback={<FullScreenMessage type={'error'} />}>
          <Suspense fallback={<FullScreenMessage type={'loading'} />}>
            <App />
          </Suspense>
        </ErrorBoundary>
      </ModalContext>
    </QueryClientProvider>
  </StrictMode>,
)
