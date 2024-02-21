import { memo } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './router'

export const App = memo(() => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
})
